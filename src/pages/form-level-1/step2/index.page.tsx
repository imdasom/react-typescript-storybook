import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { User } from './types';
import { UserDB } from './user-db';

const FormLevel1Page = () => {
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    const userList = UserDB.select();
    setUserList(userList);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>회원관리</h1>
      <div className={styles.pageContent}>
        <div className={[styles.section, styles.addForm].join(' ')}>
          <h3>회원등록</h3>
          <form className={styles.userAddForm}>
            <div className={styles.formWrapper}>
              <label htmlFor={'name'}>이름</label>
              <input type={'text'} id={'name'} className={styles.inputText} />
            </div>
            <div className={styles.formWrapper}>
              <label htmlFor={'birth'}>생년월일</label>
              <input type={'date'} id={'birth'} className={styles.inputText} />
            </div>
            <div className={styles.formWrapper}>
              <label>성별</label>
              <div className={styles.genderGroup}>
                <label htmlFor={'genderF'}>남</label>
                <input type={'radio'} name={'gender'} id={'genderF'} />
                <label htmlFor={'genderM'}>여</label>
                <input type={'radio'} name={'gender'} id={'genderM'} />
              </div>
            </div>
            <div className={styles.formWrapper}>
              <label htmlFor={'profileImage'}>프로필이미지</label>
              <div className={styles.imageWrapper}>
                <img src={''} />
                <input type={'file'} id={'profileImage'} />
              </div>
            </div>
          </form>
          <button type={'submit'} className={styles.submitButton}>
            추가
          </button>
        </div>
        <div className={styles.section}>
          <h3>회원목록</h3>
          <ul className={styles.userList}>
            {userList.map((user, index) => (
              <li className={styles.userItem} key={index}>
                <img
                  className={styles.profileImage}
                  src={user.profileImageUrl}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormLevel1Page;
