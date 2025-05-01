<script setup lang="ts">
import Button from '../components/ui/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const JoinAs = () => {
  router.push('/auth');
};

</script>

<template>
  <div 
    class="flex flex-col bg-secondary items-start justify-start h-1/4 mt-4 p-6 rounded-lg shadow-md bg-desktop">
    <h1 class="text-3xl lg:text-4xl text-accent font-bold mb-4">Welcome to Our Blog</h1>
    <p class="text-lg text-primary lg:text-secondary mb-8 px-2 rounded-b-md border-b-2 border-b-accent">Discover inspiring stories. Join us!</p>

  <Button  type="submit" variant='accent' @click="JoinAs"  class="m-5 p-5 hower:bg-primary">
    Join As
  </Button>
  </div>
</template>
