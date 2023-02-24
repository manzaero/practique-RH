<template>
  <footer class="footer footer_bg">
    <div class="container">
      <div class="row">
      <footer-icons/>
        <div class="col">
          <h3 class="footer__title">Navigation</h3>
          <ul class="footer__list">
            <li v-for="({path, name}, i) in footerList" :key="i">
              <router-link :to="path" class="footer__link">{{name}}</router-link>
            </li>
          </ul>
        </div>
        <div class="col"><h3 class="footer__title">For clients</h3>
          <ul class="footer__list">
            <li v-for="({path, name}, i) in footerClients" :key="i">
              <router-link :to="path" class="footer__link">{{name}}</router-link>
            </li>
          </ul></div>
        <div class="col">2</div>
      </div>
    </div>
  </footer>
</template>

<script>
import {menuList, menuClients} from "@/const/menuList";
import FooterIcons from "@/components/footer/FooterIcons";

export default {
  name: "TheFooter",
  data(){
    return {
      footerList: menuList,
      footerClients: menuClients
    }
  },
  components:{FooterIcons}
}
</script>

<style scoped>

</style>