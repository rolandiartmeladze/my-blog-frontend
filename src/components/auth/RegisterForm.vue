<script setup lang="ts">
import Button from '../ui/Button.vue';
</script>

<template>
  <form class="flex flex-col gap-4">
    <h1 class="text-2xl font-bold">Register</h1>
    <div class="flex flex-col gap-1">
    <label for="name">You Name</label>

    <input
      type="text"
      placeholder="Name"
      class="border px-3 py-2 rounded"
    />
</div>


    <div class="flex flex-col gap-1">
      <label for="email">Email</label>

    <input type="email" placeholder="Email" class="border px-3 py-2 rounded" />    
  </div>

  <div class="flex flex-col gap-1">
    <label for="password">Password</label>

    <input
      type="password"
      placeholder="Password"
      class="border px-3 py-2 rounded"
    />
</div>

<div class="flex flex-col gap-1">
    <label for="Rep Password">Rep Password</label>

    <input
      type="password"
      placeholder="Rep Password"
      class="border px-3 py-2 rounded"
    />
</div>


    <Button type="submit" variant="primary" class="w-full"> Register </Button>
  </form>
</template>
