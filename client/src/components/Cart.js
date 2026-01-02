import API from "../api/api";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io("http://localhost:5000");

export default function Cart({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    socket.on("orderUpdate", (order) => {
      setOrders(prev => [...prev, order]);
    });
    return () => socket.off("orderUpdate");
  }, []);

  const placeOrder = async () => {
    if (cart.length === 0) return alert("Cart is empty!");
    const order = { items: cart };
    await API.post("/orders", order);
    socket.emit("newOrder", order);
    alert("Order placed successfully!");
  };

  return (
    <div className="fixed bottom-5 right-5 bg-white p-5 rounded-xl shadow-lg w-80">
      <h2 className="font-bold text-lg">Your Cart</h2>
      {cart.map((item, i) => <p key={i}>{item.name} - ${item.price}</p>)}
      <button onClick={placeOrder} className="mt-3 bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded">Place Order</button>
      {orders.length > 0 && (
        <div className="mt-3 bg-gray-100 p-2 rounded">
          <h3 className="font-semibold">Live Orders:</h3>
          {orders.map((o,i)=><p key={i}>{o.items.map(it=>it.name).join(", ")} ({o.status})</p>)}
        </div>
      )}
    </div>
  );
}
