<template>
  <div class="wallpaper">
    <Header />
        <Nuxt />
    <Footer/>
  </div>
  
</template>

<script>
import Header from '../Components/Header.vue'
import Footer from '../Components/Footer.vue'

export default {
  components: {
    Header , Footer , 
  }
}
</script>
