const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KassaorderTable', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kassaOrder_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'kassaorder',
        key: 'id'
      }
    },
    base_text: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    payType_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'paytype',
        key: 'id'
      }
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'type',
        key: 'id'
      }
    },
    summa: {
      type: DataTypes.DECIMAL(17,3),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kassaorder_table',
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
        name: "kassaOrder_id",
        using: "BTREE",
        fields: [
          { name: "kassaOrder_id" },
        ]
      },
      {
        name: "payType_id",
        using: "BTREE",
        fields: [
          { name: "payType_id" },
        ]
      },
      {
        name: "type_id",
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
    ]
  });
};
