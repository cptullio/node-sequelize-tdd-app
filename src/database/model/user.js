
module.exports = (sequelize, Sequelize) => {
    
    User = sequelize.define('User', {
   
        UserId: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        Name: {
          type: Sequelize.STRING
        },
        Birthday: {
            type: Sequelize.DATE
        },
        Amount: {
            type: Sequelize.DECIMAL
        }
      },
    {
        freezeTableName: true,
        timestamps: false,
        version:false
    }
    ); 
    User.associate = function(database) {
        User.hasMany(database.Payment, {foreignKey: 'UserId', sourceKey: 'UserId'});
        User.belongsToMany(database.Region, { as: 'Regions', through: 'User_Region', foreignKey: 'UserId' })
    };
    return User;
  };
  

