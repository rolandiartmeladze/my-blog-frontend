<script setup lang="ts">
import Button from '../ui/Button.vue';
import Input from '../ui/Input.vue';
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  password: '',
});

const handleSubmit = async () => {
  console.log('Form submitted:', form.value);
};
</script>

<template>
  <form  @submit.prevent="handleSubmit" class="flex flex-col gap-4">
    <h1 class="text-2xl font-bold">Register</h1>

    <Input id="name" label="Yor Name" type="text" placeholder="Enter your name" v-model="form.name" />
    <Input id="email" label="Email" type="email" placeholder="Enter your email" v-model="form.email" />
    <Input id="password" label="Password" type="password" placeholder="Enter your password" v-model="form.password" />
    <Input id="reppassword" label="Rep Password" type="password" placeholder="Enter rep password"
      v-model="form.password" />

    <Button type="submit" variant="primary" class="w-full"> Register </Button>
  </form>
</template>
