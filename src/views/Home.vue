<template>
  <div class="home">
    <TheHeader msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'HomeView',
  components: {
    TheHeader
  }
}
</script>
