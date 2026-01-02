import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      setMsg("Registered successfully!");
      navigate("/login");
    } catch (err) {
      setMsg(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-50">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-lg w-96 flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        {msg && <p className="text-green-500">{msg}</p>}
        <input type="text" placeholder="Username" className="border p-2 rounded" onChange={e => setForm({...form, username: e.target.value})} />
        <input type="password" placeholder="Password" className="border p-2 rounded" onChange={e => setForm({...form, password: e.target.value})} />
        <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg">Register</button>
      </form>
    </div>
  );
}
