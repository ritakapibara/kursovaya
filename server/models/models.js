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

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketItem)
BasketItem.belongsTo(Basket)

Item.hasMany(BasketItem)
BasketItem.belongsTo(Item)

module.exports = {
    User,
    Basket,
    BasketItem,
    Item
}