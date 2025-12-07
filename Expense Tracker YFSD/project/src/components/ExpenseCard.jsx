import { FaEdit, FaTrash, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ExpenseCard({ expense, onDelete, onToggleFavorite, isFavorite }) {
  const navigate = useNavigate();

  const getCategoryColor = (category) => {
    const colors = {
      Food: 'bg-orange-100 text-orange-800',
      Transport: 'bg-blue-100 text-blue-800',
      Entertainment: 'bg-pink-100 text-pink-800',
      Shopping: 'bg-green-100 text-green-800',
      Health: 'bg-red-100 text-red-800',
      Bills: 'bg-yellow-100 text-yellow-800',
      Other: 'bg-gray-100 text-gray-800'
    };
    return colors[category] || colors.Other;
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{expense.title}</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(expense.category)}`}>
            {expense.category}
          </span>
        </div>
        <button
          onClick={() => onToggleFavorite(expense)}
          className="text-2xl ml-2 transition hover:scale-110"
        >
          {isFavorite ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-400 hover:text-red-500" />
          )}
        </button>
      </div>

      <p className="text-gray-600 mb-4">{expense.description}</p>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-3xl font-bold text-blue-600">${expense.amount}</p>
          <p className="text-sm text-gray-500">{new Date(expense.date).toLocaleDateString()}</p>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => navigate(`/edit/${expense.id}`)}
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => onDelete(expense.id)}
            className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
