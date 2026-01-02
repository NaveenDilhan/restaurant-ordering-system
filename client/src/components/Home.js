import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-green-100 flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 animate-gradient-x text-center">
        Welcome to QuickBite!
      </h1>
      <p className="mb-10 text-lg md:text-xl text-gray-700 text-center max-w-xl">
        Order your favorite meals online and get them delivered fast. Deliciousness is just a click away!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <Link
          to="/login"
          className="px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-600"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:from-yellow-500 hover:to-yellow-600"
        >
          Register
        </Link>
        <Link
          to="/menu"
          className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:from-green-500 hover:to-green-600"
        >
          View Menu
        </Link>
      </div>
    </div>
  );
}
