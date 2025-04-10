<script setup lang="ts">
import Icons from './Icons';
import Navigation from './Navigation.vue';
</script>

<template>
  <header
    class="w-full bg-secondary h-14 flex items-center justify-between px-6 py-10 shadow-md"
  >
    <h1 class="text-lg font-semibold">
      <RouterLink :to="'/'"> RA Blog </RouterLink>
    </h1>
    <div>
      <Icons name="menu" class="visible size-10 cursor-pointer hover:text-accent lg:hidden" />
    </div>
    <Navigation />
  </header>
</template>

<style scoped></style>
