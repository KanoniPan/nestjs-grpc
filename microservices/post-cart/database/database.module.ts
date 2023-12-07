import { Global, Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { ConnectionString } from 'connection-string';
import {CartModel} from "./models/cart.model";

@Global()
@Module({
    imports: [
        SequelizeModule.forRootAsync({
            useFactory: () => {
                const dbDsn = new ConnectionString(process.env.DB_DSN);
                console.log('@@@@@', dbDsn)
                return {
                    dialect: dbDsn.protocol,
                    host: dbDsn.hostname,
                    port: dbDsn.port,
                    username: dbDsn.user,
                    password: dbDsn.password,
                    database: dbDsn.path[0],
                    models: [CartModel],
                    autoLoadModels: true,
                    synchronize: Boolean(process.env.DB_LOGGING),
                    logging: Boolean(process.env.DB_SYNC),
                } as SequelizeModuleOptions;
            },
        }),
    ],
})
export class GlobalDatabaseModule {}
