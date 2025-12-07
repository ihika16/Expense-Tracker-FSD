import { Link, useLocation } from 'react-router-dom';
import { FaWallet, FaHome, FaListAlt, FaPlus, FaHeart } from 'react-icons/fa';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-blue-100 transition">
            <FaWallet className="text-2xl" />
            <span className="font-bold text-xl">ExpenseTracker</span>
          </Link>

          <div className="flex space-x-1 sm:space-x-4">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive('/')
                  ? 'bg-blue-800 text-white'
                  : 'text-blue-100 hover:bg-blue-500'
              }`}
            >
              <FaHome />
              <span className="hidden sm:inline">Home</span>
            </Link>

            <Link
              to="/expenses"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive('/expenses')
                  ? 'bg-blue-800 text-white'
                  : 'text-blue-100 hover:bg-blue-500'
              }`}
            >
              <FaListAlt />
              <span className="hidden sm:inline">Expenses</span>
            </Link>

            <Link
              to="/add"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive('/add')
                  ? 'bg-blue-800 text-white'
                  : 'text-blue-100 hover:bg-blue-500'
              }`}
            >
              <FaPlus />
              <span className="hidden sm:inline">Add</span>
            </Link>

            <Link
              to="/favorites"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive('/favorites')
                  ? 'bg-blue-800 text-white'
                  : 'text-blue-100 hover:bg-blue-500'
              }`}
            >
              <FaHeart />
              <span className="hidden sm:inline">Favorites</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
