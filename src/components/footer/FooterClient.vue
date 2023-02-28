<template>
  <div class="col"><h3 class="footer__title">For clients</h3>
    <ul class="footer__list">
      <li v-for="({path, name}, i) in footerClients" :key="i">
        <router-link :to="path" class="footer__link">{{name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    footerClients: {
      type: Array,
      required: true
    }
  },
  name: "FooterClient"
}
</script>

<style scoped>

</style>