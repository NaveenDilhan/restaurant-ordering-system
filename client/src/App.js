import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Orders from "./components/Orders";
import AdminDashboard from "./components/AdminDashboard";
import OrderStatus from "./components/OrderStatus";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/orderstatus" element={<OrderStatus/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
