<script setup lang="ts">
import Button from '../components/ui/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const JoinAs = () => {
  router.push('/auth');
};

</script>

<template>
  <Button  type="submit" variant='accent' @click="JoinAs"  class="m-5">
    Join As
  </Button>
</template>
