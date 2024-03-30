"use client";

import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface ModalComponentProps {
  showModal: boolean;
  onClose: () => void;
}

export function ExistingModalComponent({ showModal,onClose }: ModalComponentProps) {
  const [openModal, setOpenModal] = useState(false);

  // Open the modal when showModal prop changes to true
  useEffect(() => {
    if (showModal) {
      setOpenModal(true);
    }
  }, [showModal]);

  // Reset openModal state when modal is closed
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Modal
        show={openModal}
        size="md"
        popup
      >
        
        <Modal.Body className="mt-9">
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-green-50 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              You have already signed up for our newsletter
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={closeModal}>
                {"Close"}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
