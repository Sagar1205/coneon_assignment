import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrderItemsByOrderId,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/orders", createOrder);
router.get("/getOrders", getAllOrders);
router.get("/getOrderById/:id", getOrderById);
router.get("/getOrderItemsByOrderId/:order_id", getOrderItemsByOrderId);

export default router;
