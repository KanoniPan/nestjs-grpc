import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CartModel } from '../../database/models/cart.model';
@Controller()
export class CartService {
  constructor(
    @Inject('CARTS_REPOSITORY') private readonly cartModel: typeof CartModel,
  ) {}
  @GrpcMethod('CartService', 'postOne')
  async postOne(data): Promise<CartModel> {
    return await this.cartModel.create(data);
  }
}
