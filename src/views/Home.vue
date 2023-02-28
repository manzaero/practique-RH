<template>
  <div class="home">
    <the-carousel/>
    <div class="container home__offering">
      <div class="row">
        <div class="col-md-4 home_border">
          <h3 class="home__offeringTitle">
            We are Offering the Best Estate Deals
          </h3>
        </div>
        <div class="col-md-8">
          <p>
            Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat
            lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis
            lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa.
            Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
          </p>
        </div>
      </div>
    </div>
    <the-feature :featureItem="feature"/>
    <div class="properties">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <h2 class="properties__h2">
              Featured
              <b>Properties</b>
            </h2>
          </div>
          <div class="col-md-12 col-sm-12">
            <p class="properties__subtitle">
              Quisque diam lorem interdum vitaapibus vitae pede. Donec eget tellus non erat lacinia fertum. Donec in
              velit vel ipsum auctovinar.
            </p>
          </div>
        </div>

        <the-properties :property-data="properties" />
      </div>
    </div>
    <div class="home__slider">
      <the-slider/>
    </div>
    <div class="home__banner">
      <the-banner/>
    </div>
    <the-bottom-slider/>
  </div>
</template>

<script>
import TheCarousel from "@/components/TheCarousel";
import TheFeature from "@/components/TheFeature";
import TheProperties from "@/components/TheProperties";
import TheSlider from "@/components/TheSlider";
import TheBanner from "@/components/TheBanner";
import TheBottomSlider from "@/components/TheBottomSlider";
import {featureData, propertiesData} from "@/const/count";

export default {
  data(){
    return {
      feature: featureData,
      properties: propertiesData
    }
  },
  name: 'HomeView',
  components: {
    TheCarousel,
    TheFeature,
    TheProperties,
    TheSlider,
    TheBanner,
    TheBottomSlider
  }
}
</script>

<style lang="scss">
</style>
