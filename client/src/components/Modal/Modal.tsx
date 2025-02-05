import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

const SignupModalContent: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <>
      <h2 className="modal__title">Enjoy 10% off</h2>
      <p className="modal__description">
        Sign-up to receive 10% off your first purchase and you'll hear about our
        new product collections and more
      </p>

      <form onSubmit={handleSubmit}>
        <div className="modal__form-group">
          <label className="modal__form-label">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Write your e-mail"
            className="modal__form-input"
            required
          />
        </div>

        <button type="submit" className="modal__submit">
          Subscribe
        </button>
      </form>
    </>
  );
};

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <SignupModalContent />
  </Modal>
);

export { Modal, SignupModal };
