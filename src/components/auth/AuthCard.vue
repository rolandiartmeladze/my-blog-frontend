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
<div class="max-w-md text-white mx-auto mt-10 lg:mt-10 relative p-6 lg:shadow-lg lg:rounded-lg lg:bg-secondary bg-secondary shadow-sm rounded-md bg-desktop">
  <Button
    @click="toggleForm"
    variant="accent"
    class="absolute -top-5 right-6 px-4 py-2 text-lg font-semibold shadow-md rounded-md hover:brightness-110 transition duration-200"
  >
    {{ isLogin ? 'Register' : 'Login' }}
  </Button>


  <component :is="isLogin ? LoginForm : RegisterForm" />
</div>
</template>
