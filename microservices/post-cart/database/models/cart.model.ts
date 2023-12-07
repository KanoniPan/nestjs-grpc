import {
    AllowNull,
    Column,
    CreatedAt, DeletedAt,
    Model,
    Table,
    UpdatedAt,
} from 'sequelize-typescript';

@Table({
    timestamps: true,
    paranoid: true,
    indexes: [
        {
            unique: true,
            name: 'cart_id',
            fields: ['id'],
        },
    ],
    tableName: 'Carts',
})
export class CartModel extends Model<CartModel> {
    @AllowNull(true)
    @Column
    name: string;

    @Column
    price: number;
    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @DeletedAt
    deletedAt: Date;
}

export const cartsProviders = [
    {
        provide: 'CARTS_REPOSITORY',
        useValue: CartModel,
    },
];
