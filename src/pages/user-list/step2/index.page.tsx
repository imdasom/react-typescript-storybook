import styles from './index.module.scss';
import { User } from './types';

const DummyUser: User = {
  profileImageUrl: 'https://randomuser.me/api/portraits/thumb/men/19.jpg',
  username: 'bluebutterfly790',
  gender: 'MALE',
  createdAt: '2005-11-07 13:11:12',
  email: 'richard.gomez@example.com',
  name: 'Richard Gomez',
  mobile: '(612) 961-6959',
  address: 'Indiana Grants Pass, United States',
};

const UserListPage = () => {
  const userList: User[] = [DummyUser, DummyUser, DummyUser, DummyUser];

  return (
    <div className={styles.pageContainer}>
      <h1>회원목록</h1>
      <div className={styles.listWrapper}>
        <ul className={styles.listContainer}>
          {userList.map((user, index) => (
            <li className={styles.itemContainer} key={index}>
              <img
                className={styles.profileImage}
                src={user.profileImageUrl}
              ></img>
              <div className={styles.userDetailContainer}>
                <div>
                  <div className={styles.subTitle}>가입정보</div>
                  <div>
                    {user.username}{' '}
                    <label className={styles.gender}>{user.gender}</label>
                  </div>
                  <div>{user.createdAt}</div>
                  <div>{user.email}</div>
                </div>
                <hr className={styles.line} />
                <div>
                  <div className={styles.subTitle}>개인정보</div>
                  <div>{user.name}</div>
                  <div>{user.mobile}</div>
                  <div>{user.address}</div>
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
