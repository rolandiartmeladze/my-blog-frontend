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
  <div class="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg bg-secondary">
    <Button @click="toggleForm" variant="outline" class="mb-4 w-full">
      {{ isLogin ? 'Register' : 'Login' }}
    </Button>

    <component :is="isLogin ? LoginForm : RegisterForm" />
  </div>
</template>
