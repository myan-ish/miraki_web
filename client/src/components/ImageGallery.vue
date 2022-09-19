<template>
    <v-col md-12 style="background-color: black;">
        <v-container class="gallery">
        <v-row>
            <v-col md-6 class="gallery_column">
                <v-row class="gallery_image_big">
                    <v-container class="gallery_image">
                        <v-img
                            src="https://assets.website-files.com/629d9f3e132efb3a57b78b89/629d9f3e132efbbcfab78b9d_realease-big-1.png">
                        </v-img>
                    </v-container>
                </v-row>
                <v-row class="gallery_image_small">
                    <v-col md-6 class="gallery_column">
                        <v-container class="gallery_image">
                            <v-img
                                src="https://assets.website-files.com/629d9f3e132efb3a57b78b89/629d9f3e132efb6e9cb78b9b_realease-small-3.png">
                            </v-img>
                        </v-container>
                    </v-col>
                    <v-col md-6 class="gallery_column">
                        <v-container class="gallery_image">
                            <v-img
                                src="https://assets.website-files.com/629d9f3e132efb3a57b78b89/629d9f3e132efb82c9b78b98_realease-small-4.png">
                            </v-img>
                        </v-container>
                    </v-col>
                </v-row>
            </v-col>
            <v-col md-6 class="gallery_column">
                <v-row class="gallery_image_small">
                    <v-col md-6 class="gallery_column">
                        <v-container class="gallery_image">
                            <v-img
                                src="https://assets.website-files.com/629d9f3e132efb3a57b78b89/629d9f3e132efb37cfb78b9a_realease-small-1.png">
                            </v-img>
                        </v-container>
                    </v-col>
                    <v-col md-6 class="gallery_column">
                        <v-container class="gallery_image">
                            <v-img
                                src="https://assets.website-files.com/629d9f3e132efb3a57b78b89/629d9f3e132efb10f6b78b99_realease-small-2.png">
                            </v-img>
                        </v-container>
                    </v-col>
                </v-row>
                <v-row class="gallery_image_big">
                    <v-container class="gallery_image">
                        <v-img
                            src="https://assets.website-files.com/629d9f3e132efb3a57b78b89/629d9f3e132efb7140b78b9c_realease-big-2.png">
                        </v-img>
                    </v-container>
                </v-row>


            </v-col>
        </v-row>
    </v-container>
    </v-col>
</template>

<script>
export default {
    name: 'ImageGallery',
    data() {
        return {
            //
        }
    }
}
</script>

<style>
.gallery {
    width: 100%;
    /* margin-right: auto;
    margin-left: auto; */
    background-color: black;
    color: white;
    padding-top: 120px;
    padding-bottom: 120px;
    /* justify-content: end; */
    /* gap: 1rem;
    display: flex; */
}

.gallery_image_big {
    background-color: black;
    color: white;
    /* gap: 1rem;
    display: flex; */

    /* padding-top: 120px;
    padding-bottom: 120px; */
}

.gallery_image_small {
    background-color: black;
    color: white;
    /* gap: 1rem;
    display: flex; */

    /* padding-top: 120px;
    padding-bottom: 120px; */
}

.gallery_image {
    /* vertical-align: middle; */
    /* padding: 0px;
    margin: 0px;
    gap: 1rem;
    display: flex; */



}

.gallery_column {
    /* padding: 0px;
    margin: 0px;
    gap: 1rem;
    display: flex;
    flex-direction: column; */
}
</style>