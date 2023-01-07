import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { ApiUser, User } from './types';

const UserListPage = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://randomuser.me/api?page=${page}&results=10&seed=1000&nat=us`)
      .then((response) => response.json())
      .then((response) => {
        const userList: User[] = response.results.map((_user: ApiUser) => {
          return mapToUser(_user);
        });
        setUserList(userList);
        window.scrollTo(0, 0);
      });
  }, [page]);

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
      <div className={styles.paginationContainer}>
        {[1, 2, 3, 4, 5].map((_page) => {
          const classNames = [
            styles.page,
            page === _page ? styles.active : '',
          ].join(' ');
          return (
            <div
              className={classNames}
              key={_page}
              onClick={() => {
                setPage(_page);
              }}
            >
              {_page}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapToUser: (_user: ApiUser) => User = function (_user) {
  return {
    profileImageUrl: _user.picture.large,
    username: _user.login.username,
    gender: _user.gender === 'male' ? 'MALE' : 'FEMALE',
    createdAt: _user.dob.date,
    email: _user.email,
    name: `${_user.name.first} ${_user.name.last}`,
    mobile: _user.cell,
    address: `${_user.location.city}, ${_user.location.state}, ${_user.location.country}`,
  };
};

export default UserListPage;
