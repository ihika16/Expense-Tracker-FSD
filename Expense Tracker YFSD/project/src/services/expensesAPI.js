import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const expensesAPI = {
  getAllExpenses: async () => {
    const response = await axios.get(`${API_URL}/expenses`);
    return response.data;
  },

  getExpenseById: async (id) => {
    const response = await axios.get(`${API_URL}/expenses/${id}`);
    return response.data;
  },

  createExpense: async (expense) => {
    const response = await axios.post(`${API_URL}/expenses`, expense);
    return response.data;
  },

  updateExpense: async (id, expense) => {
    const response = await axios.put(`${API_URL}/expenses/${id}`, expense);
    return response.data;
  },

  deleteExpense: async (id) => {
    await axios.delete(`${API_URL}/expenses/${id}`);
  },

  getAllFavorites: async () => {
    const response = await axios.get(`${API_URL}/favorites`);
    return response.data;
  },

  addToFavorites: async (expense) => {
    const response = await axios.post(`${API_URL}/favorites`, expense);
    return response.data;
  },

  removeFromFavorites: async (id) => {
    await axios.delete(`${API_URL}/favorites/${id}`);
  },

  isFavorite: async (expenseId) => {
    const favorites = await expensesAPI.getAllFavorites();
    return favorites.some(fav => fav.id === expenseId);
  }
};
