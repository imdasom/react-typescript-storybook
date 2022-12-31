import styles from './UserPage.module.scss';
import { useEffect } from 'react';

const UserPage = () => {
  useEffect(() => {});

  return (
    <div className={styles.container}>
      <div className={styles.appContainer}>
        <div className={styles.pageTitle}>회원관리</div>
      </div>
    </div>
  );
};

export default UserPage;
