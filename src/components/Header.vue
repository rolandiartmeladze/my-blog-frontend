<script setup lang="ts">
import Icons from './Icons';
import PublicNavigation from './navigation/PublicNavigation.vue';
</script>

<template>
  <header
    class="w-full h-14 flex items-center justify-between mb-4 px-6 py-10 shadow-accent shadow-sm rounded-b-md lg:rounded-b-xl lg:shadow-lg"
  >
    <h1 class="text-lg text-accent font-semibold hover:text-secondary transition duration-300">
      <RouterLink :to="'/'"> RA Blog </RouterLink>
    </h1>
    <div>
      <Icons name="menu" class="visible size-10 cursor-pointer text-secondary hover:text-accent lg:hidden" />
    </div>
    <PublicNavigation />
  </header>
</template>

<style scoped></style>
