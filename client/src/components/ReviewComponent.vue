<template>
    <!-- Cards carousel to which shows review -->
    <v-container class="carousel">
        <v-row style="width: 75%; text-align: center; margin: auto; padding-bottom: 20px;">
            <v-col md-7>
                <h1
                    style="font-weight: 700; width: 60%; font-size:3.75em; line-height: 120%; margin-left: auto; margin-right: auto;">
                    What they are saying?
                </h1>
            </v-col>
            <v-col md-5 class="custom_font_small">
                <p>
                Here are some people who have shopped here, it can be seen from the comments given are positive
                feedback. then what are you waiting for?
            </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col md-12 class="carousel_column">
                <v-carousel cycle hide-delimiters show-arrows-on-hover height="300">
                    <v-carousel-item v-for="item in items" :key="item">
                        <v-card flat tile height="300">
                            <v-card-text>
                                <v-row>
                                    <v-col md-3 class="carousel_column">
                                        <v-container class="carousel_image">
                                            <v-img :src="item.image">
                                            </v-img>
                                        </v-container>
                                    </v-col>
                                    <v-col md-9 class="carousel_column">
                                        <v-container class="carousel_text">
                                            <h2>{{item.title}}</h2>
                                            <p>{{item.text}}</p>
                                        </v-container>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
.carousel {
    background-color: #121212;
    padding-top: 120px;
    padding-bottom: 120px;
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    /* margin: auto; */
}
</style>

<script>
export default {
    name: 'ReviewComponent',
    data() {
        return {
            items: [
                {
                    image: 'https://assets.website-files.com/629d9f3e132efb3a57b78b89/629d9f3e132efb6e9cb78b9b_realease-small-3.png',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem. Sed euismod, nisl vel aliquam aliquam, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.'
                },
                {
                    image: 'https://assets.website-files.com/629d9f3e132efb3a57b78b89/629d9f3e132efb6e9cb78b9b_realease-small-3.png',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem. Sed euismod, nisl vel aliquam aliquam, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.'
                },
                {
                    image: 'https://assets.website-files.com/629d9f3e132efb3a57b78b89/629d9f3e132efb6e9cb78b9b_realease-small-3.png',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem. Sed euismod, nisl vel aliquam aliquam, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.'
                },]
        }
    }
}
</script>
    