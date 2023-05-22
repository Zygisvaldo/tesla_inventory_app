<template>
  <v-app-bar color="white" flat scroll-behavior="hide" scroll-threshold="1">
    <template v-slot:prepend>
      <router-link to="/">
        <v-img class="px-3" :src="TeslaPreviewLogo" height="30"></v-img>
      </router-link>
    </template>
    <router-link to="/orderCar/S" class="no-link-decoration">
      <v-btn
        variant="transparent"
        class="ma-1 no-link-color"
        color="gray-lighten-4"
        >Model S</v-btn
      ></router-link
    >
    <router-link to="/orderCar/3" class="no-link-decoration">
      <v-btn
        variant="transparent"
        class="ma-1 no-link-color"
        color="gray-lighten-4"
        >Model 3</v-btn
      ></router-link
    >
    <router-link to="/orderCar/Y" class="no-link-decoration">
      <v-btn
        variant="transparent"
        class="ma-1 no-link-color"
        color="gray-lighten-4"
        >Model Y</v-btn
      ></router-link
    >
    <router-link to="/orderCar/X" class="no-link-decoration">
      <v-btn
        variant="transparent"
        class="ma-1 no-link-color"
        color="gray-lighten-4"
        >Model X</v-btn
      >
    </router-link>
    <template v-slot:append>
      <v-btn
        variant="transparent"
        @click.stop="drawer = !drawer"
        color="gray-lighten-4"
        >Menu</v-btn
      >
    </template>
  </v-app-bar>
  <v-dialog v-show="drawer" width="auto"></v-dialog>
  <v-navigation-drawer
    temporary
    v-model="drawer"
    location="right"
    color="grey-lighten-4"
    class="pa-4"
    width="300"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/3.jpg"
      title="Žygimantas Vaitkūnas"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <router-link to="/" class="no-link-decoration">
        <v-list-item
          title="Biler på lager"
          value="home"
          class="no-link-color"
        ></v-list-item>
      </router-link>

      <router-link :to="'/orderCar/' + 'S'" class="no-link-decoration">
        <v-list-item
          title="Model S"
          value="Model S"
          class="no-link-color"
        ></v-list-item>
      </router-link>
      <router-link to="/orderCar/3" class="no-link-decoration">
        <v-list-item
          title="Model 3"
          value="Model 3"
          class="no-link-color"
        ></v-list-item>
      </router-link>
      <router-link to="/orderCar/Y" class="no-link-decoration">
        <v-list-item
          title="Model Y"
          value="Model Y"
          class="no-link-color"
        ></v-list-item>
      </router-link>
      <router-link to="/orderCar/X" class="no-link-decoration">
        <v-list-item
          title="Model X"
          value="Model X"
          class="no-link-color"
        ></v-list-item>
      </router-link>
      <router-link to="/about" class="no-link-decoration">
        <v-list-item
          title="About"
          value="about"
          class="no-link-color"
        ></v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import TeslaPreviewLogo from "../../assets/tesla-preview.png";
import { ref } from "vue";
const drawer = ref(false);
</script>
<style scoped>
.no-link-color {
  color: black;
  text-decoration: none;
}
.no-link-decoration {
  text-decoration: none;
}

.no-link-decoration:hover {
  text-decoration: none;
}

.no-link-decoration:focus {
  text-decoration: none;
}

.no-link-decoration:visited {
  text-decoration: none;
}
</style>
