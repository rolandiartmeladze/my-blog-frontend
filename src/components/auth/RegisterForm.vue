<script setup lang="ts">
import Button from '../ui/Button.vue';
</script>

<template>
  <form class="flex flex-col gap-4">
    <h1 class="text-2xl font-bold">Register</h1>

    <input type="email" placeholder="Email" class="border px-3 py-2 rounded" />
    <input type="password" placeholder="Password" class="border px-3 py-2 rounded" />

    <Button type="submit" variant="primary" class="w-full">
      Register
    </Button>
  </form>
</template>
