<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/footer/Footer.vue';
</script>

<template>
  <div class="common-layout min-h-screen flex flex-col justify-between">
    <el-container>
      <el-header><Header /></el-header>
      <el-main><RouterView /></el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>
</template>

  
  
  
<style scoped></style>
