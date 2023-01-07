import styles from './index.module.scss';

const UserListPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1>회원목록</h1>
      <div className={styles.listWrapper}>
        <ul className={styles.listContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <li className={styles.itemContainer} key={index}>
              <div className={styles.profileImage}>프로필이미지</div>
              <div className={styles.userDetailContainer}>
                <div>
                  <div className={styles.subTitle}>가입정보</div>
                  <div>
                    유저네임 <label className={styles.gender}>남</label>
                  </div>
                  <div>가입일시</div>
                  <div>이메일</div>
                </div>
                <hr className={styles.line} />
                <div>
                  <div className={styles.subTitle}>개인정보</div>
                  <div>실명</div>
                  <div>휴대폰번호</div>
                  <div>주소</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserListPage;
