
module.exports = (sequelize, Sequelize) => {

    Payment = sequelize.define('Payment', {

        PaymentId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        UserId: {
            type: Sequelize.INTEGER
        },
        PaymentDate: {
            type: Sequelize.DATE
        },
        Amount: {
            type: Sequelize.DECIMAL
        }

    },
        {
            freezeTableName: true,
            timestamps: false,
            version: false
        }
    );
    Payment.associate = function (database) {
        Payment.belongsTo(database.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false,
            foreignKey: 'UserId', 
            targetKey: 'UserId'
          }
        });
    }
    return Payment;
};


