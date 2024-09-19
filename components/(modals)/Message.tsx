// components/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-dark bg-opacity-50 z-50 w-screen h-screen m-auto">
      <div className="bg-blue p-8 rounded shadow-lg text-center">
        <h2 className="text-xl font-bold">👋 Hey There!</h2>
        <p>
          I'm currently building a direct message form, but in the meantime
          shoot me an email. I'll respond quickly.
        </p>
        <h3>az.keaton@gmail.com</h3>
      </div>
      <button
        onClick={onClose}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Close
      </button>
    </div>
  );
};

export default Modal;
