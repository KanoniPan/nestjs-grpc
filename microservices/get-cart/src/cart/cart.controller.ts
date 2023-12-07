import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CartModel } from '../../database/models/cart.model';
@Controller()
export class CartService {
  constructor(
    @Inject('CARTS_REPOSITORY') private readonly cartModel: typeof CartModel,
  ) {}
  @GrpcMethod('CartService', 'findOne')
  async findOne(data): Promise<CartModel> {
    const res = await this.cartModel.findByPk(data.id);

    return (
      res ??
      ({ id: 1, name: 'boilerplate', price: 500 } as unknown as CartModel)
    );
  }
}
