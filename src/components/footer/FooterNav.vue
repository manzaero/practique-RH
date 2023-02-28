<template>
  <div class="col">
    <h3 class="footer__title">Navigation</h3>
    <ul class="footer__list">
      <li v-for="({path, name}, i) in footerList" :key="i">
        <router-link :to="path" class="footer__link">{{name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    footerList :{
      type: Array,
      required: true
    }
  },
  name: "FooterNav"
}
</script>

<style scoped>

</style>