'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Carts', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            name: { type: Sequelize.STRING },
            price: { type: Sequelize.FLOAT },
            createdAt: { type: Sequelize.DATE },
            updatedAt: { type: Sequelize.DATE },
            deletedAt: { type: Sequelize.DATE, allowNull: true },

        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('Carts');
    },
};
