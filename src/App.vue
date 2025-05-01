<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/footer/Footer.vue'; 
import PrivateNavigtion from './components/navigation/PrivateNavigation.vue'
</script>

<template>
  <div class="common-layout bg-current min-h-screen flex flex-col justify-between items-center">
    <el-container class="w-full max-w-[1440px]">
      <el-header><Header /></el-header>
      <el-main class="relative">
        <RouterView />
        <PrivateNavigtion class="fixed bottom-0 left-0 w-full md:static md:w-auto" />
      </el-main>
      <el-footer class="flex"><Footer /></el-footer>
    </el-container>
  </div>
</template>

  
  
  
<style scoped></style>
