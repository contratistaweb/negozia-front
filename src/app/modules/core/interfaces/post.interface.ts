import {Image} from "./image.interface";

export interface PostInterface {
  _id: string;
  title: string;
  text: string;
  type: string;
  tags: string;
  images: Image[];
  createdAt: Date;
  updatedAt: Date;
  deleted: false;
  id: string;
}

export type CreatePost = Pick<PostInterface, 'title'|'text'|'type'|'tags'|'images'>
export interface DynamicPost {
  data: PostInterface;
  component?: any;
}
