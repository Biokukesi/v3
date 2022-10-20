<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/footer.vue'

</script>

<template>
  <header>
    
   
      <HelloWorld  />

      <!-- <nav>
       
       
      </nav> -->
  
  
  </header>

  
 
  <RouterView />

  <Footer/>
</template>

<style scoped>


</style>
