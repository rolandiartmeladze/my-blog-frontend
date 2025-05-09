<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '../ui/Button.vue';
import SvgIcon from '../Icons.tsx';
import Input from '../ui/Input.vue';
import { useAuth } from '../../auth';

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
    await axios.get('https://my-blog-backend-production-197d.up.railway.app/sanctum/csrf-cookie', {
      withCredentials: true,
    });

    const response = await axios.post(
      'https://my-blog-backend-production-197d.up.railway.app/api/login',
      form.value,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }

    );

    const token = response.data.token;
    sessionStorage.setItem('authToken', token);

    const { isAuthenticated } = useAuth();
    isAuthenticated.value = true;    
    router.push('/');

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
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
    <div class="text-center mb-4">
      <h1 class="text-3xl text-left font-bold">Welcome Back!</h1>
      <p class="text-sm text-primery text-left">Log in to access your account</p>
    </div>

    <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>

    <div class="flex flex-col gap-5">
      <Input id="email" label="Email" type="email" placeholder="Enter your email" v-model="form.email" />
      <Input id="password" label="Password" type="password" placeholder="Enter your password" v-model="form.password" />
      <div class="flex items-center justify-center gap-2"> 
        <input type="checkbox" id="remember"
          class="mr-2 border-primary checked:bg-primary checked:border-primary focus:ring-primary" />
        <label for="remember" class="text-sm">Remember me</label>
      </div>
    </div>
    <div class="flex justify-between mt-2 lg:gap-2 lg:text-center">
      <a href="#" class="text-sm text-accent hover:underline">Forgot password?</a>
      <a href="#" class="text-sm text-accent hover:underline">Create an account</a>
    </div>

    <Button type="submit" class="w-full">
      {{ isLoading ? 'Logging in...' : 'Login' }}
    </Button>

    <div>
      <h1 class="font-bold ">
        Login With: <samp class="text-xs text-accent ">comming soon..</samp>
      </h1>
      <div class="flex gap-4 mt-2 w-full justify-center">
        <SvgIcon name="gmail" class="size-10 cursor-pointer" />
        <SvgIcon name="github" class="size-10 cursor-pointer" />
      </div>
    </div>
  </form>
</template>
