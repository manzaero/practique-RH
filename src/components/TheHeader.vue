<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="(menu, index) in headerMenu" :key="index">
            <router-link class="nav-link active" aria-current="page" :to="menu.path">
              {{menu.name}}
            </router-link>
          </li>
        </ul>
        <div>
          <a href="#"><img src="../assets/img/icons/f.png" alt=""></a>
          <a href="#"><img src="../assets/img/icons/p.png" alt=""></a>
          <a href="#"><img src="../assets/img/icons/i.png" alt=""></a>
          <a href="#"><img src="../assets/img/icons/g.png" alt=""></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data(){
    return {
      headerMenu: [
        {name: 'Home', path: '/'},
        {name: 'About Us', path: '/about'},
        {name: 'Property', path: 'property'},
        {name: 'Our Blog', path: 'our'},
        {name: 'Contacts', path: 'contact'},
      ]
    }
  }
}
</script>
