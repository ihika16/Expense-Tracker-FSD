import { useState, useEffect } from 'react';
import { expensesAPI } from '../services/expensesAPI';
import ExpenseCard from '../components/ExpenseCard';
import Loader from '../components/Loader';
import EmptyState from '../components/EmptyState';
import { toast } from 'react-toastify';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      setLoading(true);
      const data = await expensesAPI.getAllFavorites();
      setFavorites(data);
    } catch (error) {
      toast.error('Failed to load favorites');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      try {
        await expensesAPI.deleteExpense(id);
        await expensesAPI.removeFromFavorites(id);
        setFavorites(favorites.filter(exp => exp.id !== id));
        toast.success('Expense deleted successfully');
      } catch (error) {
        toast.error('Failed to delete expense');
      }
    }
  };

  const handleToggleFavorite = async (expense) => {
    try {
      await expensesAPI.removeFromFavorites(expense.id);
      setFavorites(favorites.filter(fav => fav.id !== expense.id));
      toast.info('Removed from favorites');
    } catch (error) {
      toast.error('Failed to update favorites');
    }
  };

  const totalAmount = favorites.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);

  if (loading) return <Loader />;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Favorite Expenses</h1>
          {favorites.length > 0 && (
            <p className="text-gray-600">Total: <span className="font-bold text-red-600 text-2xl">${totalAmount.toFixed(2)}</span></p>
          )}
        </div>

        {favorites.length === 0 ? (
          <EmptyState message="No favorite expenses yet" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map(expense => (
              <ExpenseCard
                key={expense.id}
                expense={expense}
                onDelete={handleDelete}
                onToggleFavorite={handleToggleFavorite}
                isFavorite={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
