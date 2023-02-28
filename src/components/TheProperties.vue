<template>
  <div class="row d-flex justify-content-between">
    <div class="col-md-4 col-sm-12 properties__col" v-for="property in propertyData" :key="property.id">
      <img :src="require(`../assets/img/properties/${property.image}.png`)" :alt="property.desc.square" class="properties__img" />
      <h4 class="properties__h4">{{ `${property.desc.square} ${property.title}` }}</h4>
      <p class="properties__sub">{{ property.subtitle }}</p>
      <p class="properties__price">${{ property.price.toFixed(3) }}</p>
      <ul class="properties__desc">
        <li class="properties__item">{{ property.desc.square }} Sq Ft</li>
        <li class="properties__item">{{ property.desc.rooms }} Bedrooms</li>
        <li class="properties__item">{{ property.desc.bath }} Bathroom</li>
      </ul>
    </div>
  </div>
  <div class="col"><button type="button" class="btn btn-primary properties__more">ALL Properties</button></div>
</template>

<script>
export default {
  props: {
    propertyData:{
      type: Array,
      required: true
    }
  },
  name: "TheProperties"
}
</script>

<style scoped>

</style>