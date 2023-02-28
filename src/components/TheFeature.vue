<template>
  <div class="feature">
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="item in featureItem" :key="item.id">
          <div class="feature__col feature__col__padding">
            <img class="feature__icon" :src="require(`../assets/img/icons/${item.icon}.png`)" :alt="item.title">
            <h4 class="feature__title">{{item.title}}</h4>
            <p class="feature__p">{{item.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    featureItem:{
      type: Array,
      required: true
    }
  },
  name: "TheFeature"
}
</script>

<style scoped>

</style>