import Modal from './Modal';
import Button from '../../Button/Button';
import React, { useState } from 'react';

const ModalTestPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button text={'모달 Step2'} onClick={handleOpen} />
      {isOpen && <Modal onClose={handleClose}>Modal Content</Modal>}
    </div>
  );
};

export default ModalTestPage;
