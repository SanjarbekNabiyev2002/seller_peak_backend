var DataTypes = require("sequelize").DataTypes;
var sequelize = require("../db/db-sequelize");
var _Kassaorder = require("./kassaorder");
var _KassaorderTable = require("./kassaorder_table");
var _Paytype = require("./paytype");
var _Prixod = require("./prixod");
var _PrixodTable = require("./prixod_table");
var _Product = require("./product");
var _Role = require("./role");
var _Sequelizemeta = require("./sequelizemeta");
var _Sklad = require("./sklad");
var _Type = require("./type");
var _User = require("./user");
var _Yetkazuvchi = require("./yetkazuvchi");

  var Kassaorder = _Kassaorder(sequelize, DataTypes);
  var KassaorderTable = _KassaorderTable(sequelize, DataTypes);
  var Paytype = _Paytype(sequelize, DataTypes);
  var Prixod = _Prixod(sequelize, DataTypes);
  var PrixodTable = _PrixodTable(sequelize, DataTypes);
  var Product = _Product(sequelize, DataTypes);
  var Role = _Role(sequelize, DataTypes);
  var Sequelizemeta = _Sequelizemeta(sequelize, DataTypes);
  var Sklad = _Sklad(sequelize, DataTypes);
  var Type = _Type(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);
  var Yetkazuvchi = _Yetkazuvchi(sequelize, DataTypes);

  KassaorderTable.belongsTo(Kassaorder, { as: "kassaOrder", foreignKey: "kassaOrder_id"});
  Kassaorder.hasMany(KassaorderTable, { as: "kassaorder_tables", foreignKey: "kassaOrder_id"});
  KassaorderTable.belongsTo(Paytype, { as: "payType", foreignKey: "payType_id"});
  Paytype.hasMany(KassaorderTable, { as: "kassaorder_tables", foreignKey: "payType_id"});
  Prixod.belongsTo(Paytype, { as: "payType", foreignKey: "payType_id"});
  Paytype.hasMany(Prixod, { as: "prixods", foreignKey: "payType_id"});
  PrixodTable.belongsTo(Prixod, { as: "prixod", foreignKey: "prixod_id"});
  Prixod.hasMany(PrixodTable, { as: "prixod_tables", foreignKey: "prixod_id"});
  User.belongsTo(Role, { as: "role", foreignKey: "role_id"});
  Role.hasMany(User, { as: "users", foreignKey: "role_id"});
  Kassaorder.belongsTo(Sklad, { as: "sklad", foreignKey: "sklad_id"});
  Sklad.hasMany(Kassaorder, { as: "kassaorders", foreignKey: "sklad_id"});
  Prixod.belongsTo(Sklad, { as: "sklad", foreignKey: "sklad_id"});
  Sklad.hasMany(Prixod, { as: "prixods", foreignKey: "sklad_id"});
  KassaorderTable.belongsTo(Type, { as: "type", foreignKey: "type_id"});
  Type.hasMany(KassaorderTable, { as: "kassaorder_tables", foreignKey: "type_id"});
  Prixod.belongsTo(Yetkazuvchi, { as: "yetkazuvchi", foreignKey: "yetkazuvchi_id"});
  Yetkazuvchi.hasMany(Prixod, { as: "prixods", foreignKey: "yetkazuvchi_id"});

  module.exports = {
    Kassaorder,
    KassaorderTable,
    Paytype,
    Prixod,
    PrixodTable,
    Product,
    Role,
    Sequelizemeta,
    Sklad,
    Type,
    User,
    Yetkazuvchi,
  };

