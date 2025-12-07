import { Link } from 'react-router-dom';
import { FaPlus, FaListAlt, FaHeart, FaChartLine } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to ExpenseTracker
          </h1>
          <p className="text-xl text-gray-600">
            Manage your expenses efficiently and stay on budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Link
            to="/add"
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-8"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-6 rounded-full mb-4">
                <FaPlus className="text-4xl text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Add Expense</h2>
              <p className="text-gray-600">Track new expenses quickly</p>
            </div>
          </Link>

          <Link
            to="/expenses"
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-8"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-6 rounded-full mb-4">
                <FaListAlt className="text-4xl text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">View Expenses</h2>
              <p className="text-gray-600">See all your expenses</p>
            </div>
          </Link>

          <Link
            to="/favorites"
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-8"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-100 p-6 rounded-full mb-4">
                <FaHeart className="text-4xl text-red-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Favorites</h2>
              <p className="text-gray-600">Access starred expenses</p>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <FaChartLine className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Track Expenses</h3>
                <p className="text-gray-600">Add, edit, and delete your expenses with ease</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <span className="text-2xl">🔍</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Search & Filter</h3>
                <p className="text-gray-600">Find expenses by name or category</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <span className="text-2xl">⭐</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Favorites</h3>
                <p className="text-gray-600">Mark important expenses for quick access</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Responsive</h3>
                <p className="text-gray-600">Works seamlessly on all devices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
