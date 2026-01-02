import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    socket.on("orderUpdate", (order) => {
      setOrders(prev => [...prev, order]);
    });
    return () => socket.off("orderUpdate");
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-center">Live Orders</h1>
      <div className="space-y-4">
        {orders.map((o, i) => (
          <div key={i} className="bg-white p-5 rounded shadow">
            <p><b>Items:</b> {o.items.map(it=>it.name).join(", ")}</p>
            <p><b>Status:</b> {o.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
