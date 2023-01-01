import Button from '../../../Button/Button';
import Modal from '../Modal';
import { UseModalType } from '../hooks/useModal';
import styles from './ConfirmModal.module.scss';

interface ConfirmModalProps {
  useModalProps: UseModalType;
}

const ConfirmModal = ({ useModalProps }: ConfirmModalProps) => {
  const { isOpen, handleClose } = useModalProps;
  const handleOk = () => {
    alert('주소를 저장하였습니다!');
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={handleClose}>
      <div className={styles.container}>
        주소를 저장하시겠습니까?
        <div className={styles.actionButtons}>
          <Button text={'취소'} onClick={handleClose} />
          <Button text={'저장'} designType={'primary'} onClick={handleOk} />
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
