<template>
    <div class="wallpaper">
        <Headers/>
            <nuxt/>
        <Footers/>
    </div>
</template>

<script>
import Headers from '../components/header.vue';
import Footers from '../components/footer.vue';

export default {
  components: {
    Headers , Footers
  }
}   
</script>