import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Cart } from '../../../../proto/build/api-gateway';
import { CartsService } from './cart.service';
@Controller()
export class CartController {
  constructor(private readonly cartService: CartsService) {}
  @Get('cart/:id')
  async findOne(@Param('id') id: string): Promise<Cart> {
    const res = await this.cartService.getCart(+id);
    console.log('res', res);
    return res as unknown as Cart;
  }

  @Post('cart')
  async post(@Body() data: Cart): Promise<Cart> {
    const res = await this.cartService.postCart(data);
    console.log('res', res);
    return res as unknown as Cart;
  }
}
