<script setup lang="ts">
import { ref } from 'vue';
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';
import Button from '../ui/Button.vue';

const isLogin = ref(true);
const toggleForm = () => {
  isLogin.value = !isLogin.value;
};
</script>

<template>
<div class="max-w-md mx-auto mt-6 lg:mt-10 relative p-6 lg:shadow-lg lg:rounded-lg lg:bg-secondary bg-white">
  <Button
    @click="toggleForm"
    variant="accent"
    class="absolute -top-5 right-4 px-4 py-2 text-lg font-semibold shadow-md rounded-md hover:brightness-110 transition duration-200"
  >
    {{ isLogin ? 'Register' : 'Login' }}
  </Button>

  <h3 class="text-2xl font-bold text-left pl-3 mb-6 mt-2">
  {{ isLogin
    ? 'Welcome back!'
    : 'Join As Now!' }}
</h3>

  <component :is="isLogin ? LoginForm : RegisterForm" />
</div>
</template>
