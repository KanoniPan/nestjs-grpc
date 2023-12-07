/* eslint-disable */

export const protobufPackage = "getCart";

export interface GetCartById {
  id: number;
}

export interface GetCart {
  id: number;
  price: number;
  name: string;
}

export interface GetCartService {
  findOne(request: GetCartById): Promise<GetCart>;
}
