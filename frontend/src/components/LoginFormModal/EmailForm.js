import {React, useState} from 'react'
import { Modal } from "../../context/Modal";

function EmailForm() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <button onClick={() => setShowModal(true)}>Log In</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <form onSubmit={handleSubmit}>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <label>
            Enter your email
                <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </label>
            
            <button type="submit">Continue</button>
        </form>
          </Modal>
        )}
      </>
    )
}

export default EmailForm