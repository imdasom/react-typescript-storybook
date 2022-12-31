import Modal from './Modal';
import Button from '../../Button/Button';
import React, { useState } from 'react';

const ModalTestPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div>
      <Button text={'모달 Step1'} onClick={handleOpen} />
      {isOpen && <Modal>Modal Content</Modal>}
    </div>
  );
};

export default ModalTestPage;
