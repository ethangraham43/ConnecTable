require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    CuisineRestaurant.destroy_all
    Restaurant.destroy_all
    Cuisine.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('cuisine_restaurants')
    ApplicationRecord.connection.reset_pk_sequence!('restaurants')
    ApplicationRecord.connection.reset_pk_sequence!('cuisines')

    puts "Creating users..."
#     # Create one user with an easy to remember username, email, and password:
    User.create!(
        first_name: 'Demo', 
        last_name: 'User',
        email: 'demo@user.io', 
        phone_number: '0000000000'
    )

    CUISINES = [
        {
            name: 'American'
        }, 
        {
            name: 'Italian'
        }, 
        {
            name: 'Indian'
        }, 
        {
            name: 'Chinese'
        }, 
        {
            name: 'French'
        }, 
        {
            name: 'Japanese'
        }, 
    ]
    # american_cuisine = Cuisine.create({name: "American"})
    puts "Creating cuisines..."

    CUISINES.each do |cuisine_params|
        Cuisine.create!(cuisine_params)
    end

    RESTAURANTS = [
        {
            name: 'STK - NYC - Midtown',
            address: '1114 6th Ave, New York, NY 10036',
            price_range: '$31 to $50',
            phone_number: '(646) 624-2455',
            open_time: '11am',
            close_time: '12am',
            avg_rating: 4.0
        },
        {
            name: 'PHD Terrace - Dream Midtown',
            address: '210 W 55th St, New York, NY 10019',
            price_range: '$30 and under',
            phone_number: '(646) 905-3660',
            open_time: '5pm',
            close_time: '2am',
            avg_rating: 4.5
        },
        {
            name: 'Tick Tock Diner NY',
            address: '481 8th Ave, New York, NY 10001',
            price_range: '$30 and under',
            phone_number: '(212) 268-8444',
            open_time: '6am',
            close_time: '10pm',
            avg_rating: 4.0
        },
        {
            name: 'The Smith - Nomad',
            address: '1115 6th Ave, New York, NY 10036',
            price_range: '$31 to $50',
            phone_number: '(212) 685-4500',
            open_time: '11:30am',
            close_time: '10pm',
            avg_rating: 4.5
        },
        {
            name: 'Quality Bistro',
            address: '120 W 55th St, New York, NY 10019',
            price_range: '$31 to $50',
            phone_number: '(212) 433-3330',
            open_time: '11:30am',
            close_time: '11pm',
            avg_rating: 4.5
        },
        {
            name: "Frankie and Johnnie's Steakhouse - 46th Street",
            address: '320 W 46th St, New York, NY 10036',
            price_range: '$31 to $50',
            phone_number: '(212) 997-9494',
            open_time: '4pm',
            close_time: '11pm',
            avg_rating: 4.5
        },
        {
            name: "Carmine's - 44th Street - NYC",
            address: '200 W 44th St, New York, NY 10036',
            price_range: '$30 and under',
            phone_number: '(212) 221-3800',
            open_time: '11:30am',
            close_time: '11pm',
            avg_rating: 4.5
        },
        {
            name: 'La Masseria',
            address: '235 W 48th St, New York, NY 10036',
            price_range: '$30 and under',
            phone_number: '(212) 582-2111',
            open_time: '12pm',
            close_time: '12am',
            avg_rating: 4.5
        },
        {
            name: "Angelo's Pizza",
            address: '1697 Broadway, New York, NY 10019',
            price_range: '$30 and under',
            phone_number: '(212) 245-8811',
            open_time: '11:30am',
            close_time: '3am',
            avg_rating: 4.5
        },
        {
            name: 'DaMarino NYC',
            address: '1116 6th Ave, New York, NY 10036',
            price_range: '$31 to $50',
            phone_number: '(212) 541-6601',
            open_time: '4pm',
            close_time: '4am',
            avg_rating: 4.0
        },
        {
            name: 'Il Forno',
            address: '709 8th Ave, New York, NY 10036',
            price_range: '$30 and under',
            phone_number: '(917) 994-9663',
            open_time: '5pm',
            close_time: '1am',
            avg_rating: 4.0
        },
        {
            name: "Olio e Più",
            address: '3 Greenwich Ave, New York, NY 10014',
            price_range: '$30 and under',
            phone_number: '(212) 243-6546',
            open_time: '11am',
            close_time: '12am',
            avg_rating: 4.5
        },
        {
        name: 'Indian Accent',
        address: '123 W 56th St, New York, NY 10019',
        price_range: '$50 and over',
        phone_number: '(212) 842-8070',
        open_time: '5pm',
        close_time: '10:30pm',
        avg_rating: 4.5
    },
    {
        name: 'Dhaba',
        address: '108 Lexington Ave, New York, NY 10016',
        price_range: '$30 and under',
        phone_number: '(212) 679-1284',
        open_time: '12pm',
        close_time: '12am',
        avg_rating: 4.5
    },
    {
        name: 'Bhatti Indian Grill',
        address: '100 Lexington Ave, New York, NY 10016',
        price_range: '$31 to $50',
        phone_number: '(212) 683-4228 ext. 4229',
        open_time: '12pm',
        close_time: '10pm',
        avg_rating: 4.0
    },
    {
        name: 'Utsav Indian Bar and Grill',
        address: '1185 6th Ave, New York, NY 10036',
        price_range: '$30 and under',
        phone_number: '(212) 575-2525',
        open_time: '12pm',
        close_time: '10:30pm',
        avg_rating: 4.5
    },
    {
        name: 'Tamarind- Tribeca',
        address: '99 Hudson St, New York, NY 10013',
        price_range: '$31 to $50',
        phone_number: '(212) 775-9000',
        open_time: '11:30am',
        close_time: '11:30pm',
        avg_rating: 4.5
    },
    {
        name: "Spice Symphony - 50th St.",
        address: '150 E 50th St, New York, NY 10022',
        price_range: '$30 and under',
        phone_number: '(212) 300-4869',
        open_time: '11am',
        close_time: '10:30pm',
        avg_rating: 4.5
    },
    {
        name: "Philippe Chow - Downtown",
        address: '355 W 16th St, New York, NY 10011',
        price_range: '$31 to $50',
        phone_number: '(212) 885-9400',
        open_time: '5pm',
        close_time: '11:30pm',
        avg_rating: 4.5
    },
    {
        name: 'Buddakan NY',
        address: '75 9th Ave, New York, NY 10011',
        price_range: '$50 and over',
        phone_number: '(212) 989-6699',
        open_time: '5pm',
        close_time: '12am',
        avg_rating: 4.5
    },
    {
        name: "TAO Uptown",
        address: '42 E 58th St, New York, NY 10022',
        price_range: '$31 to $50',
        phone_number: '(212) 888-2288',
        open_time: '11:30am',
        close_time: '12am',
        avg_rating: 4.5
    },
    {
        name: 'Sei Less',
        address: '156 W 38th St, New York, NY 10018',
        price_range: '$31 to $50',
        phone_number: '(212) 586-2675',
        open_time: '12pm',
        close_time: '1am',
        avg_rating: 4.5
    },
    {
        name: 'Jue Lan Club',
        address: '49 W 20th St, New York, NY 10011',
        price_range: '$31 to $50',
        phone_number: '(646) 524-7409',
        open_time: '12pm',
        close_time: '11pm',
        avg_rating: 4.5
    },
    {
        name: "Xu's Public House",
        address: '15 Union Square W, New York, NY 10003',
        price_range: '$30 and under',
        phone_number: '(212) 901-9971',
        open_time: '11am',
        close_time: '10pm',
        avg_rating: 4.5
    },
    {
    name: 'Marseille',
    address: '630 9th Ave, New York, NY 10036',
    price_range: '$30 and under',
    phone_number: '(212) 333-2323',
    open_time: '11:30am',
    close_time: '11:30pm',
    avg_rating: 4.5
},
{
    name: 'Cafe Cluny',
    address: '284 W 12th St, New York, NY 10014',
    price_range: '$31 to $50',
    phone_number: '(212) 255-6900',
    open_time: '10am',
    close_time: '10pm',
    avg_rating: 4.5
},
{
    name: 'Boucherie - West Village',
    address: '99 7th Ave S, New York, NY 10014',
    price_range: '$31 to $50',
    phone_number: '(212) 837-1616',
    open_time: '10am',
    close_time: '12am',
    avg_rating: 4.5
},
{
    name: 'Le Coucou',
    address: '138 Lafayette St, New York, NY 10013',
    price_range: '$50 and over',
    phone_number: '(212) 271-4252',
    open_time: '11:30am',
    close_time: '11pm',
    avg_rating: 4.5
},
{
    name: 'Koloman',
    address: '16 W 29th St, New York, NY 10001',
    price_range: '$50 and over',
    phone_number: '(212) 790-8970',
    open_time: '7:30am',
    close_time: '11pm',
    avg_rating: 4.5
},
{
    name: "Le Parisien",
    address: '163 E 33rd St, New York, NY 10016',
    price_range: '$30 and under',
    phone_number: '(212) 889-5489',
    open_time: '12pm',
    close_time: '9:30pm',
    avg_rating: 4.5
},
{
    name: "Kumi Japanese Restaurant & Bar - NYC",
    address: '120 W 57th St, New York, NY 10019',
    price_range: '$50 and over',
    phone_number: '(212) 671-0439',
    open_time: '5pm',
    close_time: '11pm',
    avg_rating: 4.0
},
{
    name: 'Zuma Japanese Restaurant - NY',
    address: '261 Madison Ave, New York, NY 10016',
    price_range: '$50 and over',
    phone_number: '(212) 544-9862',
    open_time: '11:30am',
    close_time: '11:30pm',
    avg_rating: 4.5
},
{
    name: "Sushi by Bou - Nomad",
    address: '32A East 32nd Street Lobby, 32 E 32nd St, New York, NY 10016',
    price_range: '$31 to $50',
    phone_number: '(917) 268-7268',
    open_time: '5pm',
    close_time: '11pm',
    avg_rating: 5
},
{
    name: 'Nobu Fifty Seven',
    address: '40 W 57th St, New York, NY 10019',
    price_range: '$31 to $50',
    phone_number: '(212) 757-3000',
    open_time: '12pm',
    close_time: '11pm',
    avg_rating: 4.5
},
{
    name: 'BONDST',
    address: '6 Bond St, New York, NY 10012',
    price_range: '$50 and over',
    phone_number: '(646) 524-7410',
    open_time: '6pm',
    close_time: '10:30pm',
    avg_rating: 5
},
{
    name: "Wokuni",
    address: '327 Lexington Ave, New York, NY 10016',
    price_range: '$31 to $50',
    phone_number: '(212) 447-1212',
    open_time: '11:30am',
    close_time: '10pm',
    avg_rating: 4.5
}
    ]
    puts "Creating restaurants..."

    RESTAURANTS.each do |restaurant_params|
        Restaurant.create!(restaurant_params)
    end

CUISINE_RESTAURANTS = [
    {
        cuisine_id: Cuisine.find_by(name: 'American').id,
        restaurant_id: Restaurant.find_by(name: "STK - NYC - Midtown").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'American').id,
        restaurant_id: Restaurant.find_by(name: "PHD Terrace - Dream Midtown").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'American').id,
        restaurant_id: Restaurant.find_by(name: "Tick Tock Diner NY").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'American').id,
        restaurant_id: Restaurant.find_by(name: "The Smith - Nomad").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'American').id,
        restaurant_id: Restaurant.find_by(name: "Quality Bistro").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'American').id,
        restaurant_id: Restaurant.find_by(name: "Frankie and Johnnie's Steakhouse - 46th Street").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Italian').id,
        restaurant_id: Restaurant.find_by(name: "Carmine's - 44th Street - NYC").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Italian').id,
        restaurant_id: Restaurant.find_by(name: "La Masseria").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Italian').id,
        restaurant_id: Restaurant.find_by(name: "Angelo's Pizza").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Italian').id,
        restaurant_id: Restaurant.find_by(name: "DaMarino NYC").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Italian').id,
        restaurant_id: Restaurant.find_by(name: "Il Forno").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Italian').id,
        restaurant_id: Restaurant.find_by(name: "Olio e Più").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Indian').id,
        restaurant_id: Restaurant.find_by(name: "Indian Accent").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Indian').id,
        restaurant_id: Restaurant.find_by(name: "Dhaba").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Indian').id,
        restaurant_id: Restaurant.find_by(name: "Bhatti Indian Grill").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Indian').id,
        restaurant_id: Restaurant.find_by(name: "Utsav Indian Bar and Grill").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Indian').id,
        restaurant_id: Restaurant.find_by(name: "Tamarind- Tribeca").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Indian').id,
        restaurant_id: Restaurant.find_by(name: "Spice Symphony - 50th St.").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Chinese').id,
        restaurant_id: Restaurant.find_by(name: "Philippe Chow - Downtown").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Chinese').id,
        restaurant_id: Restaurant.find_by(name: "Buddakan NY").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Chinese').id,
        restaurant_id: Restaurant.find_by(name: "TAO Uptown").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Chinese').id,
        restaurant_id: Restaurant.find_by(name: "Sei Less").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Chinese').id,
        restaurant_id: Restaurant.find_by(name: "Jue Lan Club").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Chinese').id,
        restaurant_id: Restaurant.find_by(name: "Xu's Public House").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'French').id,
        restaurant_id: Restaurant.find_by(name: "Marseille").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'French').id,
        restaurant_id: Restaurant.find_by(name: "Cafe Cluny").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'French').id,
        restaurant_id: Restaurant.find_by(name: "Boucherie - West Village").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'French').id,
        restaurant_id: Restaurant.find_by(name: "Le Coucou").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'French').id,
        restaurant_id: Restaurant.find_by(name: "Koloman").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'French').id,
        restaurant_id: Restaurant.find_by(name: "Le Parisien").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Japanese').id,
        restaurant_id: Restaurant.find_by(name: "Kumi Japanese Restaurant & Bar - NYC").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Japanese').id,
        restaurant_id: Restaurant.find_by(name: "Zuma Japanese Restaurant - NY").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Japanese').id,
        restaurant_id: Restaurant.find_by(name: "Sushi by Bou - Nomad").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Japanese').id,
        restaurant_id: Restaurant.find_by(name: "Nobu Fifty Seven").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Japanese').id,
        restaurant_id: Restaurant.find_by(name: "BONDST").id
    },
    {
        cuisine_id: Cuisine.find_by(name: 'Japanese').id,
        restaurant_id: Restaurant.find_by(name: "Wokuni").id
    }
]
puts "Creating cuisine_restaurants..."

CUISINE_RESTAURANTS.each do |cuisine_restaurant_params|
    CuisineRestaurant.create!(cuisine_restaurant_params)
end

#     # More users
#     10.times do 
#         User.create!({
#         first_name: Faker::Internet.unique.first_name(specifier: 3),
#         last_name: Faker::Internet.unique.last_name(specifier: 3),
#         email: Faker::Internet.unique.email,
#         password: 'password'
#         }) 
#     end

#     puts "Done!"
end