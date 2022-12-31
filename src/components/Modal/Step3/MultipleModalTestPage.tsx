import Modal from './Modal';
import Button from '../../Button/Button';
import React from 'react';
import useModal from './hooks/useModal';

const MultipleModalTestPage = () => {
  const modal1 = useModal();
  const modal2 = useModal();
  const modal3 = useModal();
  return (
    <>
      <div>
        <Button text={'모달1 열기'} onClick={modal1.handleOpen} />
        {modal1.isOpen && (
          <Modal onClose={modal1.handleClose}>Modal Content</Modal>
        )}
      </div>
      <div>
        <Button text={'모달2 열기'} onClick={modal2.handleOpen} />
        {modal2.isOpen && (
          <Modal onClose={modal2.handleClose}>Modal Content</Modal>
        )}
      </div>
      <div>
        <Button text={'모달3 열기'} onClick={modal3.handleOpen} />
        {modal3.isOpen && (
          <Modal onClose={modal3.handleClose}>Modal Content</Modal>
        )}
      </div>
    </>
  );
};

export default MultipleModalTestPage;
