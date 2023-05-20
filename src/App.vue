<template>
  <v-app class="bg-grey-lighten-4">
    <TheHeader />
    <v-main class="my-15 py-15">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
</script>
