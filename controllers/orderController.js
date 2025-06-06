import Order from "../models/orderModel.js";
import OrderItem from "../models/orderItemModel.js";

export const createOrder = async (req, res) => {
  const { customer_id, order_date, total, items } = req.body;

  if (!customer_id || !total || !Array.isArray(items)) {
    return res.status(400).json({ error: "Invalid request payload" });
  }

  try {
    const order = await Order.create(
      {
        customer_id,
        order_date,
        total,
        OrderItems: items,
      },
      {
        include: ["OrderItems"],
      }
    );

    res.status(201).json({ message: "Order created", order });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to create order", details: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: OrderItem,
          as: "OrderItems",
        },
      ],
    });
    res.status(201).json({ message: "Order found", orders });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to get orders", details: error.message });
  }
};

export const getOrderById = async (req, res) => {
  const id = req.params.id;

  try {
    const order = await Order.findOne({
      where: { id: id },
      include: [
        {
          model: OrderItem,
          as: "OrderItems",
        },
      ],
    });

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch order" });
  }
};

export const getOrderItemsByOrderId = async (req, res) => {
  const id = req.params.order_id;

  try {
    const order = await OrderItem.findAll({
      where: { order_id: id },
    });

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch order" });
  }
};
