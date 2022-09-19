<template>
    <v-container>
        <v-row>
            <v-container fluid style="margin: 0px; padding: 0px; width: 60%; z-index: 1;">
                <v-col md-12>
                    <v-row class="sized_box"></v-row>
                    <v-row class="custom_font_large">
                        BLACK FRIDAY SALE
                    </v-row>
                    <v-row class="sized_box">

                    </v-row>
                    <v-row class="custom_font_small">
                        Use the rest of your time to think about what to buy here, because it's a Black Friday Sale!
                    </v-row>
                    <v-row class="sized_box"></v-row>
                    <v-btn color="grey" height="50px" width="150px" style="margin-right: 0px;">
                        Discover
                    </v-btn>
                </v-col>
            </v-container>
            <v-container fluid style="margin: 0px; padding: 0px; width: 40%; z-index: 0;" class="banner_image">
                <v-img :src="require('@/assets/banner_image_1.jpeg')" style="height: 100%; width: 100%;"></v-img>
            </v-container>
            <v-container class="sized_box"></v-container>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'TopBanner',
    data() {
        return {
            //
        }
    }
}
</script>