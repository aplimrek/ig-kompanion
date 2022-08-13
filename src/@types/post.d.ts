interface IUser {
  id: string;
  profile_picture: string;
  username: string;
}

export interface IPost {
  id: string;
  user: IUser;
  images: string[];
  video: string;
  type: 'video' | 'image';
  description: string;
}
