
module.exports = (sequelize, Sequelize) => {
    
    Region = sequelize.define('Region', {
   
        RegionId: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        Name: {
          type: Sequelize.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        version:false
    }
    ); 
    Region.associate = function(database) {
        Region.belongsToMany(database.User, { as: 'Users', through: 'User_Region', foreignKey: 'RegionId' })
    };

    return Region;
  };
  

