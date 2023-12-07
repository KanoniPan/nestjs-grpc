import { Module } from '@nestjs/common';
import { GlobalDatabaseModule } from '../../database/database.module';
import { CartModel } from '../../database/models/cart.model';
import { CartService } from './cart.controller';

@Module({
  imports: [GlobalDatabaseModule],
  controllers: [CartService],
  providers: [
    CartService,
    {
      provide: 'CARTS_REPOSITORY',
      useValue: CartModel,
    },
  ],
})
export class CartModule {}
