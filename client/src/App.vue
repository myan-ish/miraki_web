<template>
  <v-app>
    <v-main style="width:100%">
      <NavigationBar />
      <TopBanner />
      <VideoText />
      <VideoComponent />
      <NewReleasedFashion />
      <ImageGallery />
      <ReviewComponent />
      <FooterComponent />

      <!-- <FeaturedBanner /> -->
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from './components/NavigationBar.vue';
import LandingBanner from './components/LandingBanner.vue';
import TopBanner from './components/TopBanner.vue';
import VideoText from './components/VideoText.vue';
import VideoComponent from './components/VideoComponent.vue';
import NewReleasedFashion from './components/NewReleasedFashion.vue';
import ImageGallery from './components/ImageGallery.vue';
import ReviewComponent from './components/ReviewComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default defineComponent({
  name: 'App',

  components: {
    NavigationBar,
    TopBanner,
    VideoText,
    VideoComponent,
    NewReleasedFashion,
    ImageGallery,
    ReviewComponent,
    FooterComponent
  },

  data() {
    return {
      //
    }
  },
})
</script>

<style>
.body {
  font-family: matter, sans-serif;
}

.custom_font_large {
  font-size: 10rem;
  font-weight: 800;
  line-height: 83%;
  width: 80%;
}

.centered_paragraph {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 150px;
  padding-bottom: 150px;
  background-color: black;
  color: white;
}

.custom_font_small {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 95%;
  width: 80%;
}

.sized_box {
  height: 50px;
}

.banner_image {
  /* background-image: url("../assets/banner_image_1.jpeg"); */
  margin-top: 3rem;
}

.underline-image {
  /* display: block; */
  width: 50%;
  margin-top: 1.625em;
  margin-right: auto;
  margin-left: auto;
  background-color: transparent;
  vertical-align: middle;
}
</style>
    