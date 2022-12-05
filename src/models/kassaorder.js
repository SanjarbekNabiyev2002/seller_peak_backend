const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Kassaorder', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fakt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vaqt: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sklad_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sklad',
        key: 'id'
      }
    },
    summaUZB: {
      type: DataTypes.DECIMAL(17,3),
      allowNull: true
    },
    summaUSD: {
      type: DataTypes.DECIMAL(17,3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kassaorder',
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
        name: "sklad_id",
        using: "BTREE",
        fields: [
          { name: "sklad_id" },
        ]
      },
    ]
  });
};
