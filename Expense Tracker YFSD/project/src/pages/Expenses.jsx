import { useState, useEffect } from 'react';
import { expensesAPI } from '../services/expensesAPI';
import ExpenseCard from '../components/ExpenseCard';
import FilterBar from '../components/FilterBar';
import Loader from '../components/Loader';
import EmptyState from '../components/EmptyState';
import { toast } from 'react-toastify';

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const categories = ['Food', 'Transport', 'Entertainment', 'Shopping', 'Health', 'Bills', 'Other'];

  useEffect(() => {
    loadExpenses();
    loadFavorites();
  }, []);

  const loadExpenses = async () => {
    try {
      setLoading(true);
      const data = await expensesAPI.getAllExpenses();
      setExpenses(data);
    } catch (error) {
      toast.error('Failed to load expenses');
    } finally {
      setLoading(false);
    }
  };

  const loadFavorites = async () => {
    try {
      const data = await expensesAPI.getAllFavorites();
      setFavorites(data);
    } catch (error) {
      console.error('Failed to load favorites', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      try {
        await expensesAPI.deleteExpense(id);
        setExpenses(expenses.filter(exp => exp.id !== id));

        const favToRemove = favorites.find(fav => fav.id === id);
        if (favToRemove) {
          await expensesAPI.removeFromFavorites(id);
          setFavorites(favorites.filter(fav => fav.id !== id));
        }

        toast.success('Expense deleted successfully');
      } catch (error) {
        toast.error('Failed to delete expense');
      }
    }
  };

  const handleToggleFavorite = async (expense) => {
    const isFav = favorites.some(fav => fav.id === expense.id);

    try {
      if (isFav) {
        await expensesAPI.removeFromFavorites(expense.id);
        setFavorites(favorites.filter(fav => fav.id !== expense.id));
        toast.info('Removed from favorites');
      } else {
        await expensesAPI.addToFavorites(expense);
        setFavorites([...favorites, expense]);
        toast.success('Added to favorites');
      }
    } catch (error) {
      toast.error('Failed to update favorites');
    }
  };

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = expense.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         expense.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === '' || expense.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const totalAmount = filteredExpenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);

  if (loading) return <Loader />;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">All Expenses</h1>
          <p className="text-gray-600">Total: <span className="font-bold text-blue-600 text-2xl">${totalAmount.toFixed(2)}</span></p>
        </div>

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          categories={categories}
        />

        {filteredExpenses.length === 0 ? (
          <EmptyState message="No expenses found" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExpenses.map(expense => (
              <ExpenseCard
                key={expense.id}
                expense={expense}
                onDelete={handleDelete}
                onToggleFavorite={handleToggleFavorite}
                isFavorite={favorites.some(fav => fav.id === expense.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
