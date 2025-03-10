const sequelize = require('../db/index')
const { DataTypes } = require('sequelize')

const User = sequelize.define('users',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(255), allowNull: false},
    email: { type: DataTypes.STRING(255), unique: true, allowNull: false,},
    password: { type: DataTypes.STRING(255), allowNull: false},
    isActive: { type: DataTypes.STRING(255), defaultValue: false}

})

const Notification = sequelize.define("notifications",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: DataTypes.INTEGER},
    header: {type: DataTypes.STRING, allowNull: false},
    content: {type: DataTypes.STRING},
})

const Product = sequelize.define("products", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    type: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.FLOAT},
    isBestSeller: {type: DataTypes.BOOLEAN},
    description: {type: DataTypes.STRING, allowNull: false},
    image: {type: DataTypes.STRING},
})

const Order = sequelize.define("orders",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: DataTypes.INTEGER},
    quantity: {type: DataTypes.INTEGER, },
    totalPrice: {type: DataTypes.FLOAT},
    isCompleted: {type: DataTypes.BOOLEAN,defaultValue: false},
})

const PaymentTypes = sequelize.define("paymenttypes",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    cardNumber: {type: DataTypes.STRING}
})

const Cart = sequelize.define("cart",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: DataTypes.INTEGER},
    itemId: {type: DataTypes.INTEGER}
})





module.exports = {
    User,
    Notification,
    Product,
    Order,
    PaymentTypes,
    Cart
}