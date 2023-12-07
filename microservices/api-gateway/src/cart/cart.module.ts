import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartsService } from './cart.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as path from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GET_CART_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50051',
          package: 'cart',
          protoPath: path.join(
            __dirname,
            '../../../../../../..',
            'proto/api-gateway.proto',
          ),
        },
      },
      {
        name: 'POST_CART_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50052',
          package: 'cart',
          protoPath: path.join(
            __dirname,
            '../../../../../../..',
            'proto/api-gateway.proto',
          ),
        },
      },
    ]),
  ],
  controllers: [CartController],
  providers: [CartsService],
})
export class CartModule {}
