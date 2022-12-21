const sequelize =require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: {type: DataTypes.STRING, unique: true, },
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket  = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BasketItem  = sequelize.define('basket_item',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Item  = sequelize.define('item',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, unique: true, allowNull: false },
    price: {type: DataTypes.INTEGER, allowNull: false },
    desc: {type: DataTypes.STRING, allowNull: false },
    img: {type: DataTypes.STRING, unique: true, allowNull: false },

})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const ItemInfo  = sequelize.define('item_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},

})

const Order  = sequelize.define('order',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status: {type: DataTypes.INTEGER, allowNull: false },
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketItem)
BasketItem.belongsTo(Basket)

Item.hasMany(BasketItem)
BasketItem.belongsTo(Item)

Order.hasOne(Basket)
Basket.belongsTo(Order)

Type.hasMany(Item)
Item.belongsTo(Type)

Brand.hasMany(Item)
Item.belongsTo(Brand)

Item.hasMany(ItemInfo, {as: 'info'});
ItemInfo.belongsTo(Item)


module.exports = {
    User,
    Basket,
    BasketItem,
    Item,
    Type,
    Brand,
    Order,
    ItemInfo,
    Order
}