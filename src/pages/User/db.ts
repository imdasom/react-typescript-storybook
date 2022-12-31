interface User {
  id: number;
  name: string;
  gender: 'F' | 'M';
  birth: Date;
  email: string;
}

export const UserDB = {
  _userDB: [
    {
      id: new Date().getTime(),
      name: 'user1',
      gender: 'F',
      birth: new Date(),
      email: 'user1@gmail.com',
    },
    {
      id: new Date().getTime(),
      name: 'user2',
      gender: 'F',
      birth: new Date(),
      email: 'user2@gmail.com',
    },
    {
      id: new Date().getTime(),
      name: 'user3',
      gender: 'F',
      birth: new Date(),
      email: 'user3@gmail.com',
    },
    {
      id: new Date().getTime(),
      name: 'user4',
      gender: 'F',
      birth: new Date(),
      email: 'user4@gmail.com',
    },
    {
      id: new Date().getTime(),
      name: 'user5',
      gender: 'F',
      birth: new Date(),
      email: 'user5@gmail.com',
    },
    {
      id: new Date().getTime(),
      name: 'user6',
      gender: 'F',
      birth: new Date(),
      email: 'user6@gmail.com',
    },
  ] as User[],
  create: async function (user: Omit<User, 'id'>) {
    const newUser = {
      ...user,
      id: new Date().getTime(),
    };
    this._userDB.push(newUser);
    return await new Promise((resolve) => {
      resolve(newUser);
    });
  },
  select: async function () {
    return await new Promise((resolve) => {
      resolve(this._userDB);
    });
  },
  selectById: async function (id: number) {
    return await new Promise((resolve) => {
      resolve(this._userDB.filter((user) => user.id === id));
    });
  },
};
