import styles from './Modal.module.scss';
import { PropsWithChildren } from 'react';

type ModalProps = PropsWithChildren;

const Modal = ({ children }: ModalProps) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
