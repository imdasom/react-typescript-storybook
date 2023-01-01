import Button from '../../Button/Button';
import React, { useState } from 'react';
import useModal from './hooks/useModal';
import PostCodeModal from './components/PostCodeModal';
import Input from '../../Input/Step2.0/Input';
import styles from './ModalTestPage.module.scss';
import ConfirmModal from './components/ConfirmModal';

const ModalTestPage = () => {
  const confirmModal = useModal();
  const postCodeModal = useModal();
  const [postCode, setPostCode] = useState('');
  const [address1, setAddress1] = useState('');
  return (
    <div className={styles.postCodeModalContainer}>
      <div className={styles.postCodeContainer}>
        <Input value={postCode} readOnly={true} />
        <Button text={'주소찾기'} onClick={postCodeModal.handleOpen} />
      </div>
      <div>
        <Input value={address1} readOnly={true} />
      </div>
      <PostCodeModal
        useModalProps={postCodeModal}
        onComplete={({ postCode, address }) => {
          setPostCode(postCode);
          setAddress1(address);
        }}
      />
      <div>
        <Input />
      </div>
      <div className={styles.submitButtonContainer}>
        <Button
          text={'저장'}
          designType={'primary'}
          onClick={confirmModal.handleOpen}
        />
        <ConfirmModal useModalProps={confirmModal} />
      </div>
    </div>
  );
};

export default ModalTestPage;
