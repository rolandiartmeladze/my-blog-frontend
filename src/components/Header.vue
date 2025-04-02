<script setup lang="ts">
import Navigation from './Navigation.vue';
</script>

<template>
  <header
    class="w-full bg-secondary h-14 flex items-center justify-between px-6 py-10 shadow-md"
  >
    <h1 class="text-lg font-semibold">
      <RouterLink :to="'/'"> RA Blog </RouterLink>
    </h1>
    <Navigation />
  </header>
</template>

<style scoped></style>
