<template>
  <footer class="footer footer_bg">
    <div class="container">
      <div class="row">
        <footer-icons/>
        <footer-nav :footer-list="footerList"/>
        <footer-client :footerClients="footerClients"/>
        <footer-contacts/>
      </div>
    </div>
  </footer>
</template>

<script>
import {menuList, menuClients} from "@/const/menuList";
import FooterIcons from "@/components/footer/FooterIcons";
import FooterNav from "@/components/footer/FooterNav";
import FooterClient from "@/components/footer/FooterClient";
import FooterContacts from "@/components/footer/FooterContacts";

export default {
  name: "TheFooter",
  data(){
    return {
      footerList: menuList,
      footerClients: menuClients
    }
  },
  components:{FooterClient, FooterIcons, FooterNav, FooterContacts}
}
</script>

<style scoped>

</style>