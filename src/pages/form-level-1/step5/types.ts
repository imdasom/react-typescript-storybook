export type User = {
  id: number;
  name: string;
  birth: Date;
  gender: 'FEMALE' | 'MALE';
  profileImageUrl: string;
  snsInfoList?: SnsInfo[] | null;
};

export type UserCreate = Omit<User, 'id'>;

export interface IUserDB {
  _userList: User[];
  select: () => User[];
  selectById: (id: number) => User | undefined;
  create: (user: UserCreate) => void;
}

export type UserForm = {
  name?: string;
  birth?: string;
  gender?: 'F' | 'M';
  profileImageUrl?: string;
  snsInfoList?: SnsInfo[];
};

export type SnsInfo = {
  type: 'INSTAGRAM' | 'FACEBOOK' | 'TICTOK';
  value: string;
};
