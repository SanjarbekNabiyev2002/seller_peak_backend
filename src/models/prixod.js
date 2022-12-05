const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Prixod', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fakt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "fakt"
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
    yetkazuvchi_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'yetkazuvchi',
        key: 'id'
      }
    },
    payType_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'paytype',
        key: 'id'
      }
    },
    soni: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    summa: {
      type: DataTypes.DECIMAL(17,3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'prixod',
    timestamps: true,
    paranoid: true,
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
        name: "fakt",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fakt" },
        ]
      },
      {
        name: "sklad_id",
        using: "BTREE",
        fields: [
          { name: "sklad_id" },
        ]
      },
      {
        name: "yetkazuvchi_id",
        using: "BTREE",
        fields: [
          { name: "yetkazuvchi_id" },
        ]
      },
      {
        name: "payType_id",
        using: "BTREE",
        fields: [
          { name: "payType_id" },
        ]
      },
    ]
  });
};
