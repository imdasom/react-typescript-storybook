import styles from './Modal.module.scss';
import { IoMdClose } from 'react-icons/io';
import { PropsWithChildren } from 'react';

type ModalProps = PropsWithChildren<{
  onClose: () => void;
}>;

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <IoMdClose onClick={onClose} className={styles.closeButton} />
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
