import { IUserDB, User } from './types';

export const UserDB: IUserDB = {
  _userList: [
    {
      id: 1,
      name: '김땡땡',
      birth: new Date(),
      gender: 'MALE',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      snsInfoList: [
        { type: 'TICTOK', value: '@tictok' },
        { type: 'INSTAGRAM', value: '@__insta' },
        { type: 'FACEBOOK', value: 'faceface' },
      ],
    },
    {
      id: 2,
      name: '이땡땡',
      birth: new Date(),
      gender: 'MALE',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
      snsInfoList: [{ type: 'TICTOK', value: '@tictok' }],
    },
    {
      id: 3,
      name: '최땡땡',
      birth: new Date(),
      gender: 'FEMALE',
      profileImageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    {
      id: 4,
      name: '박땡땡',
      birth: new Date(),
      gender: 'FEMALE',
      profileImageUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
      snsInfoList: [{ type: 'INSTAGRAM', value: '@__ins.tagram' }],
    },
    {
      id: 5,
      name: '조땡땡',
      birth: new Date(),
      gender: 'MALE',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/18.jpg',
      snsInfoList: [{ type: 'FACEBOOK', value: 'face.book' }],
    },
  ],
  select: function () {
    return this._userList;
  },
  selectById: function (id: number) {
    if (!id) {
      throw Error('UserDB.selectById : id required');
    }
    return this._userList.find((user) => user.id === id);
  },
  create: function (user) {
    const newUser: User = {
      ...user,
      id: new Date().getTime(),
    };
    this._userList.push(newUser);
  },
};
