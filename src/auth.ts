import { ref } from 'vue';
import axios from 'axios';

const user = ref(null);
const isAuthenticated = ref(false);
const token = sessionStorage.getItem('authToken');

if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  isAuthenticated.value = true;

  axios.get('/api/user')
    .then(res => {
      user.value = res.data;
    })
    .catch(() => {
      logout();
    });
}

function logout() {
  sessionStorage.removeItem('authToken');
  delete axios.defaults.headers.common['Authorization'];
  user.value = null;
  isAuthenticated.value = false;
}

export function useAuth() {
  return {
    user,
    isAuthenticated,
    logout
  };
}
