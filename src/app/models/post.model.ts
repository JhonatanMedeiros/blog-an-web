import { UserModal } from './user.model';

export class PostModel {
  _id: string;
  updatedAt: string;
  createdAt: string;
  title: string;
  titleUrl: string;
  content: string;
  imgUrl: string;
  author: UserModal;
  comment: any[];
  category: any[];
}

export class PostResponseModel {
  posts: PostModel[];
  page: number;
  pages: number;
  total: number;
  limit: number;
}


