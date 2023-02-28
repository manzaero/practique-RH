<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand logo" href="/"><img src="../assets/img/icons/logo.png" alt="logo"/></a>
      <div class="collapse collapse-size navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item menu-link" v-for="(menu, index) in headerMenu" :key="index">
            <router-link class="nav-link menu-link active" aria-current="page" :to="menu.path">
              {{menu.name}}
            </router-link>
          </li>
        </ul>
        <div class="icons">
          <a href="https://www.facebook.com/" target="_blank"><img src="../assets/img/icons/f.png" alt=""></a>
          <a href="https://www.pinterest.com/" target="_blank"><img src="../assets/img/icons/p.png" alt=""></a>
          <a href="https://www.instagram.com/" target="_blank"><img src="../assets/img/icons/i.png" alt=""></a>
          <a href="https://myaccount.google.com/" target="_blank"><img src="../assets/img/icons/g.png" alt=""></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {menuList} from '@/const/menuList'
export default {
  name: 'TheHeader',
  props: {
    msg: String
  },
  data(){
    return {
      headerMenu: menuList,
    }
  }
}
</script>

<style lang="scss">
@import '../assets/layouts/index.scss';
  .navbar {
    height: 90px;
  }
  .logo{
    margin-right: 180px;
  }
  .navbar-nav {
    height: 90px;
  }
  .collapse-size {
    font-size: 18px;
  }
  .menu-link {
    padding: 16px 30px;
    cursor: pointer;
    &:hover {
      background-color: $grey;
    }
  }
  .icons {
    :hover{
      background-color: $grey;
    }
    a {
      width: 30px;
      height: 30px;
      text-align: center;
      border: 1px solid $grey;
      border-radius: 50%;
      margin-right: 10px;
      display: inline-block;
    }
  }
</style>
