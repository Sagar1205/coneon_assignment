import { DataTypes } from "sequelize";
import sequelize from "./db.js";
import Order from "./orderModel.js";

const OrderItem = sequelize.define("OrderItem", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

// Define relationship
Order.hasMany(OrderItem, { foreignKey: "order_id", as: "OrderItems" });
OrderItem.belongsTo(Order, { foreignKey: "order_id" });

export default OrderItem;
