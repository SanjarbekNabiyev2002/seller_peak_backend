const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sklad', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nomi: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "nomi"
    }
  }, {
    sequelize,
    tableName: 'sklad',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "nomi",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nomi" },
        ]
      },
    ]
  });
};
