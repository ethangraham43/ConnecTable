import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupFormPage from './SignupFormPage';

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);
  
    return (
      <>
        <button className="signup-button-modal" onClick={() => setShowModal(true)}>Sign Up</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <SignupFormPage />
          </Modal>
        )}
      </>
    );
  }
  export default SignupFormModal;
