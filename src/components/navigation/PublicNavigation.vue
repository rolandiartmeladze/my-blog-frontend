<script lang="ts" setup>
import { ref } from 'vue';
import { PublicNavItems } from '../../navigationItems';
import Button from '../ui/Button.vue';

const menu = ref(PublicNavItems);
</script>

<template>
  <nav class="hidden p-3 bottom-0 left-0 w-full lg:w-auto lg:flex">
    <RouterLink
      v-for="item in menu"
      :key="item.name"
      :to="item.link"
      class="text-accent hover:text-accent-dark text-lg font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out"
    >
      <Button variant="outline">
        <samp class="hidden lg:flex">{{ item.name }}</samp>
      </Button>
    </RouterLink>
  </nav>
</template>
