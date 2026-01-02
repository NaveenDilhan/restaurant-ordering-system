import { useEffect, useState } from "react";
import API from "../api/api";
import Cart from "./Cart";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    API.get("/menu").then(res => setMenu(res.data));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menu.map(item => (
          <div key={item._id} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-700">{item.description}</p>
            <p className="text-orange-500 font-bold mt-2">${item.price}</p>
            <button onClick={() => addToCart(item)} className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
}
