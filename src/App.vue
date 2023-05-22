<template>
  <v-app class="bg-grey-lighten-4">
    <TheHeader />
    <v-main >
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
</script>
