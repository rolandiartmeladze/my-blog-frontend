<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const form = {
  email: 'rartmeladze@gmail.com',
  password: '11111111',
};

const router = useRouter();
const errorMessage = ref<string | null>(null);
const isLoading = ref(false);

const handleSubmit = async () => {
  errorMessage.value = null;
  isLoading.value = true;

  try {
    await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
      withCredentials: true,
    });

    const response = await axios.post(
      'http://localhost:8000/api/login',
      form,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    console.log('Login successful:', response.data);

    router.push('/posts');
  } catch (error: any) {
    errorMessage.value =
      error.response?.data?.message || 'An error occurred. Please try again.';
    console.error('Authentication error:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <section class="login-container">
    <h1>Log In</h1>

    <!-- შეცდომის შეტყობინება -->
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

    <form @submit.prevent="handleSubmit" class="login-form">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="form.email"
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          v-model="form.password"
          id="password"
          type="password"
          placeholder="Enter your password"
          required
          autocomplete="current-password"
        />
      </div>

      <button type="submit" :disabled="isLoading">
        {{ isLoading ? 'Logging in...' : 'Login' }}
      </button>
    </form>
  </section>
</template>

<style scoped>

</style>