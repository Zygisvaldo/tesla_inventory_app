<template>
  <div class="ma-5 pa-4">
    <v-app-bar color="white" flat scroll-behavior="hide" scroll-threshold="10">
      <template v-slot:prepend>
        <v-img class="px-3" :src="TeslaPreviewLogo" height="30"></v-img>
      </template>
      <template v-slot:append>
        <v-btn variant="tonal" color="gray-lighten-4">Menu</v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script setup>
import TeslaPreviewLogo from "../../assets/tesla-preview.png";
</script>
