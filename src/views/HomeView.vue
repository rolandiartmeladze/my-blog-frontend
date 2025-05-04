<script setup lang="ts">
import WelcomeSection from '../components/WelcomeSection.vue';
import Dashboard from '../views/DashboardView.vue';
import { useAuth } from '../auth';

const { isAuthenticated } = useAuth();
</script>

<template>
  <WelcomeSection v-if="!isAuthenticated" />
  <Dashboard v-if="isAuthenticated" />
</template>
