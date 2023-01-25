import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { SnsInfo, User, UserCreate, UserForm } from './types';
import { UserDB } from './user-db';
import dayjs from 'dayjs';
import Modal from '../../../components/Modal/Step4/Modal';
import useModal from '../../../components/Modal/Step3/hooks/useModal';

// const DummyUser: UserForm = {
//   name: '김땡땡',
//   birth: '1993-01-20',
//   gender: 'F',
//   profileImageUrl: 'https://picsum.photos/200/300',
// };

const DefaultUser: UserForm = {
  name: '',
  birth: dayjs().format('YYYY-MM-DD'),
  gender: 'F',
  profileImageUrl: '',
  snsInfoList: [{ type: 'INSTAGRAM', value: '' }],
};

const SNS_INFO_TRANSLATOR = {
  INSTAGRAM: '인스타그램',
  FACEBOOK: '페이스북',
  TICTOK: '틱톡',
};

const FormLevel1Page = () => {
  const { isOpen, handleOpen, handleClose } = useModal();
  const [userList, setUserList] = useState<User[]>([]);
  const [form, setForm] = useState<UserForm>(DefaultUser);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const userList = UserDB.select();
    setUserList(userList);
  }, []);

  const handleChangeName = (name: string) => {
    setForm({
      ...form,
      name,
    });
  };

  const handleChangeBirth = (birth: string) => {
    setForm({
      ...form,
      birth,
    });
  };

  const handleChangeGender = (gender: 'F' | 'M') => {
    setForm({
      ...form,
      gender,
    });
  };

  const handleChangeImage = (file: File) => {
    setForm({
      ...form,
      profileImageUrl: URL.createObjectURL(file),
    });
  };

  const handleChangeSnsInfo = (index: number, snsInfo: SnsInfo) => {
    setForm({
      ...form,
      snsInfoList: form?.snsInfoList?.map((_snsInfo, _index) => {
        return index === _index ? snsInfo : _snsInfo;
      }),
    });

    console.log(
      form?.snsInfoList?.map((_snsInfo, _index) => {
        return index === _index ? snsInfo : _snsInfo;
      })
    );
  };

  const handleClickAddSnsInfo = () => {
    setForm({
      ...form,
      snsInfoList: form?.snsInfoList
        ? [...form?.snsInfoList, { type: 'INSTAGRAM', value: '' }]
        : [{ type: 'INSTAGRAM', value: '' }],
    });
  };

  const handleDeleteSnsInfo = (index: number) => {
    setForm({
      ...form,
      snsInfoList: form?.snsInfoList?.filter(
        (snsInfo, _index) => _index !== index
      ),
    });
  };

  const handleSubmit = () => {
    const user: UserCreate = {
      name: form.name || '',
      birth: dayjs(form.birth).toDate(),
      gender: form.gender === 'F' ? 'FEMALE' : 'MALE',
      profileImageUrl: form.profileImageUrl || '',
      snsInfoList: form.snsInfoList,
    };
    UserDB.create(user);
    setUserList([...UserDB.select()]);
    setForm(DefaultUser);
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>회원관리</h1>
      <div className={styles.pageContent}>
        <div className={[styles.section, styles.addForm].join(' ')}>
          <h3>회원등록</h3>
          <form className={styles.userAddForm}>
            <div className={styles.formWrapper}>
              <label htmlFor={'name'}>이름</label>
              <input
                type={'text'}
                id={'name'}
                className={styles.inputText}
                value={form.name}
                onChange={(event) => handleChangeName(event.target.value)}
              />
            </div>
            <div className={styles.formWrapper}>
              <label htmlFor={'birth'}>생년월일</label>
              <input
                type={'date'}
                id={'birth'}
                className={styles.inputText}
                value={form.birth}
                onChange={(event) => handleChangeBirth(event.target.value)}
              />
            </div>
            <div className={styles.formWrapper}>
              <label>성별</label>
              <div className={styles.genderGroup}>
                <label htmlFor={'genderF'}>남</label>
                <input
                  type={'radio'}
                  name={'gender'}
                  id={'genderF'}
                  checked={form.gender === 'F'}
                  onChange={() => handleChangeGender('F')}
                />
                <label htmlFor={'genderM'}>여</label>
                <input
                  type={'radio'}
                  name={'gender'}
                  id={'genderM'}
                  checked={form.gender === 'M'}
                  onChange={() => handleChangeGender('M')}
                />
              </div>
            </div>
            <div className={styles.formWrapper}>
              <label htmlFor={'profileImage'}>프로필이미지</label>
              <div className={styles.imageWrapper}>
                <img src={form.profileImageUrl} />
                <input
                  type={'file'}
                  id={'profileImage'}
                  onChange={(event) => {
                    if (event.target.files?.[0]) {
                      handleChangeImage(event.target.files[0]);
                    }
                  }}
                />
              </div>
            </div>
            <div className={styles.formWrapper}>
              <label htmlFor={'snsInfoList'}>SNS계정</label>
              <div>
                <button
                  className={styles.addSnsInfoButton}
                  onClick={(event) => {
                    event.preventDefault();
                    handleClickAddSnsInfo();
                  }}
                >
                  추가
                </button>
                <div className={styles.snsInfoList}>
                  {form?.snsInfoList?.map((snsInfo, i) => {
                    return (
                      <div className={styles.snsInfoWrapper} key={i}>
                        <select
                          onChange={(event) => console.log(event.target.value)}
                        >
                          <option value={'INSTGRAM'}>인스타그램</option>
                          <option value={'FACEBOOK'}>페이스북</option>
                          <option value={'TICTOK'}>틱톡</option>
                        </select>
                        <input
                          type={'text'}
                          className={styles.snsInfoValue}
                          value={snsInfo.value}
                          onChange={(event) =>
                            handleChangeSnsInfo(i, {
                              ...snsInfo,
                              value: event.target.value,
                            })
                          }
                        />
                        <div
                          className={styles.deleteSnsInfoButton}
                          onClick={() => handleDeleteSnsInfo(i)}
                        >
                          X
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </form>
          <button
            type={'submit'}
            className={styles.submitButton}
            onClick={handleSubmit}
          >
            추가
          </button>
        </div>
        <div className={styles.section}>
          <h3>회원목록</h3>
          <ul className={styles.userList}>
            {userList.map((user, index) => (
              <li
                className={styles.userItem}
                key={index}
                onClick={() => {
                  setUser(user);
                  handleOpen();
                }}
              >
                <img
                  className={styles.profileImage}
                  src={user.profileImageUrl}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen && (
        <Modal onClose={handleClose}>
          <div className={styles.userInfo}>
            <img src={user?.profileImageUrl} className={styles.profileImage} />
            <div>
              <div>아이디: {user?.id}</div>
              <div>이름: {user?.name}</div>
              <div>생년월일: {dayjs(user?.birth).format('YYYY/MM/DD')}</div>
              <div>성별: {user?.gender === 'FEMALE' ? '남' : '여'}</div>
              <div>
                SNS계정:{' '}
                {user?.snsInfoList?.map((snsInfo, i) => (
                  <div key={i}>
                    [{SNS_INFO_TRANSLATOR[snsInfo.type]}] {snsInfo.value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FormLevel1Page;
