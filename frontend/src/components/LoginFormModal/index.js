import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="signin-button-modal" onClick={() => setShowModal(true)}>Sign In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <span className="close" onClick={() => setShowModal(false)}>&times;</span>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;