/* eslint-disable */

export const protobufPackage = "postCart";

export interface PostCartById {
  id: number;
}

export interface PostCart {
  id: number;
  price: number;
  name: string;
}

export interface PostCartService {
  postOne(request: PostCartById): Promise<PostCart>;
}
