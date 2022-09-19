<template>
  <!-- <v-toolbar color="transparent" > -->
    <!-- Border Outline -->
  <v-toolbar color="transparent" outlined dense elevation="3"> 

    <v-toolbar-title>
      <v-img :src="require('@/assets/logo_dark.jpg')" max-height="130" max-width="250"></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text>New Arrivals</v-btn>
      <v-btn text>Shop</v-btn>
      <v-btn text>Beauty</v-btn>
      <v-btn text>Sale</v-btn>
      <v-btn text>Instagram</v-btn>
    </v-toolbar-items>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      //
    }
  }
}
</script>