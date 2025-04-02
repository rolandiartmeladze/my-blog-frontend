<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  type?: 'button' | 'submit';
}>();

const buttonClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary text-white hover:bg-opacity-80';
    case 'secondary':
      return 'bg-secondary text-white hover:bg-secondary';
    case 'accent':
      return 'bg-accent text-white hover:bg-secondary';
    case 'outline':
      return 'border border-border text-text hover:bg-border';
    default:
      return 'bg-primary text-white';
  }
});
</script>

<template>
  <button
    :type="type || 'button'"
    :class="`px-4 py-2 rounded-md transition ${buttonClasses}`"
  >
    <slot />
  </button>
</template>
