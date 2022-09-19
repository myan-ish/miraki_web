<template>
    <v-col class="new_released_fashion">
        <v-container class="text-container">
                <h1 style="font-weight: 700; width: 60%; font-size:3.75em; line-height: 120%; margin-left: auto; margin-right: auto;">New Release Fashion
                </h1>
                <v-container style="width: 50%;">
                    Our latest fashion that can add to your dress style for this special day.
                    Discount
                    applies to all products without any exception!</v-container>
                <v-btn color="grey" height="50px" width="150px" style="margin-right: 0px;">
                    See more
                </v-btn>
        </v-container>
    </v-col>
</template>

<style>
.new_released_fashion {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    background-color: black;
    color: white;
    padding-top: 120px;
    padding-bottom: 120px;

}

.text-container {
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    background-color: black;
    color: white;
    font-size: 1.125em;
    line-height: 150%;
    text-align: center;
    width: 50%;
}
</style>

<script>
export default {
    name: 'NewReleasedFashion',
    data() {
        return {
            //
        }
    }
}
</script>
