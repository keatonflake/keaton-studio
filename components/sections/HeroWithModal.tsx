// components/HeroWithModal.tsx
"use client"; // Ensure this component is treated as client-side

import React, { useState } from "react";
import Modal from "../(modals)/Message"; // Adjust path as necessary
import Hero from "./Hero";

const HeroWithModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Hero onOpenModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default HeroWithModal;
