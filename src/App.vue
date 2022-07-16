<template>
  <v-app>
    <v-app-bar app color="#a03037" dark>
      <div class="d-flex align-center">
        <router-link to="/"
          ><v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="./assets/education.png"
            transition="scale-transition"
            width="40"
        /></router-link>

        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" />

        <h1 class="yellow--text">BookStore</h1>
      </div>

      <v-spacer></v-spacer>

      <v-text-field
        outlined
        hide-details
        single-line
      ></v-text-field>

      <v-btn icon>   
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <span class="mr-2">Cart</span>
      <router-link to="/Cart"><v-icon>mdi-cart</v-icon></router-link>
      <div class="cartbtn">{{ CartNo.length }}</div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import CartService from './Service/CartService';
export default {
  name: "App",

  data () {
    return {
      CartNo: [],
    };
    },
     methods: {
    getCart() {
      CartService.getAllCart().then((response) => {
        console.log(response.data.data);
        this.CartNo = response.data.data;
      });
    }
  },
  created() {
    this.getCart();
  },
};
</script>