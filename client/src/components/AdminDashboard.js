import { useEffect, useState } from "react";
import API from "../api/api";

export default function AdminDashboard() {
  const [menu, setMenu] = useState([]);
  const [item, setItem] = useState({ name: "", price: "", description: "" });

  useEffect(() => {
    API.get("/menu").then(res => setMenu(res.data));
  }, []);

  const addItem = async () => {
    await API.post("/menu", item);
    setMenu([...menu, item]);
    setItem({ name: "", price: "", description: "" });
  };

  const deleteItem = async (id) => {
    await API.delete(`/menu/${id}`);
    setMenu(menu.filter(it => it._id !== id));
  };

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="mb-6 flex space-x-2">
        <input className="border p-2 rounded" placeholder="Name" value={item.name} onChange={e => setItem({...item, name: e.target.value})}/>
        <input className="border p-2 rounded" placeholder="Price" value={item.price} onChange={e => setItem({...item, price: e.target.value})}/>
        <input className="border p-2 rounded" placeholder="Description" value={item.description} onChange={e => setItem({...item, description: e.target.value})}/>
        <button onClick={addItem} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Add</button>
      </div>
      <div className="space-y-4">
        {menu.map(it => (
          <div key={it._id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <p className="font-semibold">{it.name} - ${it.price}</p>
              <p className="text-gray-600">{it.description}</p>
            </div>
            <button onClick={() => deleteItem(it._id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
