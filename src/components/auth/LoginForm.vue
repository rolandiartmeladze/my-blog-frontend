<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from "../ui/Button.vue";

const form = ref({
  email: '',
  password: '',
});

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
      form.value,
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
    errorMessage.value = error.response?.data?.message || 'An error occurred.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
    <h1 class="text-2xl font-bold">Log In</h1>

    <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>

    <div class="flex flex-col gap-1">
      <label for="email">Email</label>
      <input
        v-model="form.email"
        type="email"
        id="email"
        placeholder="Enter your email"
        required
        class="border px-3 py-2 rounded"
      />
    </div>

    <div class="flex flex-col gap-1">
      <label for="password">Password</label>
      <input
        v-model="form.password"
        type="password"
        id="password"
        placeholder="Enter your password"
        required
        class="border px-3 py-2 rounded"
      />
    </div>

    <Button type="submit" variant="primary" class="w-full">
      {{ isLoading ? 'Logging in...' : 'Login' }}
    </Button>
  </form>
</template>
