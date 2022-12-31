import Modal from './Modal';
import Button from '../../Button/Button';
import React from 'react';
import useModal from './hooks/useModal';

const ModalTestPage = () => {
  const { isOpen, handleOpen, handleClose } = useModal();
  return (
    <div>
      <Button text={'모달 Step3'} onClick={handleOpen} />
      {isOpen && <Modal onClose={handleClose}>Modal Content</Modal>}
    </div>
  );
};

export default ModalTestPage;
