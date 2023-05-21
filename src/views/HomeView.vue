<template>
  <DialogView :openDialog="openDialog"></DialogView>
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
import DialogView from "@/components/userInterface/DialogView.vue";
import { ref, onBeforeMount, onMounted, nextTick } from "vue";

const openDialog = ref(false);

onBeforeMount(async function () {
  await nextTick();
  openDialog.value = true;
  console.log("lol");
});
onMounted(() => {
  setTimeout(() => {
    openDialog.value = false;
  }, 500);
});
</script>
