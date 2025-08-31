// body structure
// {
//   products: [
//     {
//       productId: 1,
//       quantity: 2,
//       storeName: "Fibertel"
//     },
//     {
//       productId: 1,
//       quantity: 1,
//       storeName: "polleria"
//     },
//   ]
// }

import { APIS } from "../data/index.js";
import Orders from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const body = req.body;
    const products = body.products;
    const stores = getStoreList(products);
    const ordersCreated = [];
    const userId = req.user._id;
    
    for(const store of stores) {
      try {
        const url = APIS[store];
        if(!url) return;

        const productsToSend = products.filter((product) => product.storeName === store);
        const bodyToSend = {
          products: productsToSend
        };

        const response = await fetch(`${url}/orders`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyToSend),
        });

        const orderCreated = await response.json();
        const orderToSave = {
          orderId: orderCreated.id,
          storeName: store,
        };

        ordersCreated.push(orderToSave);
      }catch(e) {
        console.error("Falló al crear order por cada uno", e);
      }
    };

    const newOrder = new Orders({userId, orders: ordersCreated});
    const orderSaved = await newOrder.save();

    res.status(201).json(orderSaved);
  }catch(e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
}

export const getOrders = async (_req, res) => {
  try {
    const orders = await Orders.find();
    res.json(orders);
  }catch(e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
}

export const getOrderByUser = async (req, res) => {
  try {
    const orders = await Orders.find({ userId: req.user._id });
    res.json(orders);
  }catch(e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
}

export const getOneByStore = async (req, res) => {
  try {
    const store = req.params.store;
    const url = APIS[store];
    if(!url) return res.status(400).json({ message: "La tienda no existe" });

    const orderId = req.params.orderId;
    if(!orderId) return res.status(400).json({ message: "El id de la orden es requerido" });

    const response = await fetch(`${url}/orders/${orderId}`);
    const order = await response.json();
    res.json(order);
  }catch(e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
}

function getStoreList(products) {
  const stores = new Set();

  products.forEach(product => stores.add(product.storeName));

  return Array.from(stores);
}
