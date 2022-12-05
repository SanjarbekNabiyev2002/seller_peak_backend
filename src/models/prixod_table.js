const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PrixodTable', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prixod_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'prixod',
        key: 'id'
      }
    },
    shtrix: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    qoldiq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soni: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    narxYetkazuvchi: {
      type: DataTypes.DECIMAL(17,3),
      allowNull: false
    },
    summaYetkazuvchi: {
      type: DataTypes.DECIMAL(17,3),
      allowNull: false
    },
    narxKirim: {
      type: DataTypes.DECIMAL(17,3),
      allowNull: false
    },
    summaKirim: {
      type: DataTypes.DECIMAL(17,3),
      allowNull: false
    },
    chakanaFoiz: {
      type: DataTypes.DECIMAL(17,3),
      allowNull: true
    },
    chakanaNarx: {
      type: DataTypes.DECIMAL(17,3),
      allowNull: true
    },
    ulgurjiFoiz: {
      type: DataTypes.DECIMAL(17,3),
      allowNull: true
    },
    ulgurjiNarx: {
      type: DataTypes.DECIMAL(17,3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'prixod_table',
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
        name: "prixod_id",
        using: "BTREE",
        fields: [
          { name: "prixod_id" },
        ]
      },
    ]
  });
};
