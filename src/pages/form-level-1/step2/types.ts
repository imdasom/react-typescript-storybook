export type User = {
  id: number;
  name: string;
  birth: Date;
  gender: 'FEMALE' | 'MALE';
  profileImageUrl: string;
};

export interface IUserDB {
  _userList: User[];
  select: () => User[];
  selectById: (id: number) => User | undefined;
  create: (user: User) => void;
}
