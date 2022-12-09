# == Schema Information
#
# Table name: users
#
#  id            :bigint           not null, primary key
#  email         :string           not null
#  first_name    :string           not null
#  last_name     :string           not null
#  phone_number  :string           not null
#  session_token :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_phone_number   (phone_number) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#
class User < ApplicationRecord
    before_validation :ensure_session_token

    validates :email, 
        uniqueness: true, 
        length: { in: 3..255 }, 
        format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token, presence: true, uniqueness: true
    # validates :password, length: { in: 6..255 }, allow_nil: true


    def self.find_by_credentials(credential)
        if URI::MailTo::EMAIL_REGEXP.match(credential)
            user = User.find_by(email: credential)
        else
            user = User.find_by(phone_number: credential)
        end
        if user
          return user
        else
          return nil
        end
      end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        save
        session_token
    end

    private

    def generate_unique_session_token
        loop do
            session_token = SecureRandom.urlsafe_base64(16)
            return session_token unless User.exists?(session_token:)
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end
end
