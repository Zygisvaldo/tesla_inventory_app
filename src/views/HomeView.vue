<template>
  <v-row style="height: 100px">
    <v-col>
      <HomeViewHeader />
    </v-col>
  </v-row>
  <v-row>
    <v-col style="max-width: 350px">
      <SideBar />
    </v-col>
    <v-col>
      <BaseCard />
    </v-col>
  </v-row>
</template>

<script setup>
import SideBar from "@/components/homeComponents/SideBar.vue";
import HomeViewHeader from "@/components/homeComponents/HomeViewHeader.vue";
import BaseCard from "@/components/homeComponents/BaseCard.vue";
</script>
