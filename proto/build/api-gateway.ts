/* eslint-disable */

export const protobufPackage = "cart";

export interface CartById {
  id: number;
}

export interface Cart {
  id: number;
  price: number;
  name: string;
}

export interface CartService {
  findOne(request: CartById): Promise<Cart>;
  postOne(request: Cart): Promise<Cart>;
}
