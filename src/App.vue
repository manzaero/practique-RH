<template>
  <main-container>
    <template v-slot:header>
      <the-header/>
    </template>
    <main>
      <router-view/>
    </main>
    <template v-slot:footer>
      <the-footer/>
    </template>
  </main-container>
</template>


<script>
import TheHeader from './components/TheHeader'
import TheFooter from "@/components/footer/TheFooter";
import MainContainer from "@/components/MainContainer";
export default {
  components :{
    MainContainer,
    TheHeader, TheFooter
  }
}
</script>
<style lang="scss">
</style>
