<script lang="ts" setup>
import Icons from '../Icons';
</script>

<template>
  <footer class="w-full bg-secondary flex items-center justify-between p-2 shadow-xl rounded-t-xl ">
    <h1 class="text-lg font-semibold text-white hover:text-yellow-300 transition duration-300">
      © Roland Artmeladze
    </h1>
    <div class="flex space-x-6">
        <div>
      <a
        href="https://github.com/rolandiartmeladze"
        target="_blank"
        class="text-yellow-300 hover:text-white transition duration-300 flex items-center space-x-2"
      >                  
      <Icons name="github" class="text-white hover:text-yellow-300 transition duration-300" />

        <span>GitHub</span>
      </a>
  
        </div>
      <a
        href="https://linkedin.com/in/rolandi-artmeladze"
        target="_blank"
        class="text-yellow-300 hover:text-white transition duration-300 flex items-center space-x-2"
      >
      
        <span>LinkedIn</span>
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 2px solid #0e131d;
  font-family: 'Poppins', sans-serif;
}

footer a {
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
}

footer a i {
  font-size: 1.2rem;
}
</style>