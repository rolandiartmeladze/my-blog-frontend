import api from '../plugins/axios';

const fetchUser = async () => {
  try {
    const response = await api.get('/users');
    return response.data;

  } catch (error) {
    console.error('Failed to get user info:', error);
  }
};

export { fetchUser };
