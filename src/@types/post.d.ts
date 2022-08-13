interface IUser {
  id: string;
  profile_picture: string;
  username: string;
}

export interface IPost {
  id: string;
  user: IUser;
  images: IImage[];
  video: string;
  type: 'video' | 'image';
  description: string;
  ratio?: number;
}

export interface IImage {
  id: string;
  thumbnail: string;
  original: string;
}
