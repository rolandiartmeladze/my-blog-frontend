<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchUser } from '../services/fetchUser.ts';

interface User {
  id: number;
  name: string;
  email: string;
}

const users = ref<User[]>([]); 
const errorMessage = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await fetchUser();
    users.value = response;
    console.log('Users:', users.value);
  } catch (error) {
    console.error('Error fetching users:', error);
    errorMessage.value = 'Failed to load user data.';
  }
});
</script>

<template>
  <div class="flex flex-col items-start justify-start mt-4 p-11 rounded-lg bg-gray-100">  
    <h1 class="text-3xl text-accent my-6">Dashboard</h1>

    <h2 v-if="users.length > 0">Welcome, You are on Board, hear is users:</h2>
    <p v-else-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>    
    <p v-else>Loading...</p>

    <div v-for="user in users" :key="user.id">
      <ul class="flex"><li>{{ user.name }}</li>
      <li>{{ user.email }}</li></ul>
</div>    
  </div>
</template>