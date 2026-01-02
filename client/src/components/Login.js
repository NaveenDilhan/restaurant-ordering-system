import { useState, useContext } from "react";
import API from "../api/api";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      login(res.data.token, res.data.role);
      navigate("/menu");
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-50">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-lg w-96 flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input type="text" placeholder="Username" className="border p-2 rounded" onChange={e => setForm({...form, username: e.target.value})} />
        <input type="password" placeholder="Password" className="border p-2 rounded" onChange={e => setForm({...form, password: e.target.value})} />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">Login</button>
      </form>
    </div>
  );
}
