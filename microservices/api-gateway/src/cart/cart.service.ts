import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Cart, CartService } from '../../../../proto/build/api-gateway';

import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class CartsService implements OnModuleInit {
  private cartService: CartService;
  private postCartService: CartService;

  constructor(
    @Inject('GET_CART_PACKAGE') private client: ClientGrpc,
    @Inject('POST_CART_PACKAGE') private client2: ClientGrpc,
  ) {}

  onModuleInit() {
    this.cartService = this.client.getService<CartService>('CartService');
    this.postCartService = this.client2.getService<CartService>('CartService');
  }

  getCart(id: number): Promise<Cart> {
    console.log('this.cartService', this.cartService);
    return this.cartService.findOne({ id });
  }

  postCart(body: Cart): Promise<Cart> {
    console.log('@@@@', this.postCartService);
    return this.postCartService.postOne(body);
  }
}
