<template>
  <v-row class="my-4 py-4">
    <v-col>
      <CarOrderMain />
    </v-col>
    <v-col class="sidebar-side" @scroll="handleSidebarScroll">
      <CarOrderSideBar :carModel="carModel" />
    </v-col>
  </v-row>
</template>

<script setup>
import CarOrderMain from "../components/carOrderComponents/CarOrderMain.vue";
import CarOrderSideBar from "../components/carOrderComponents/CarOrderSideBar.vue";
import { defineProps, computed, ref, onMounted, onBeforeUnmount } from "vue";

const onboarding = ref(0);

const propsToUse = defineProps({
  carId: { type: String, required: true },
});
const carModel = computed(() => {
  return propsToUse.carId;
});

const handleSidebarScroll = () => {
  const scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  if (scrollPosition <= 400) {
    onboarding.value = 0;
  } else if (scrollPosition > 400 && scrollPosition < 800) {
    onboarding.value = 1;
  } else {
    onboarding.value = 2;
  }
  console.log(scrollPosition);
};

onMounted(() => {
  window.addEventListener("scroll", handleSidebarScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleSidebarScroll);
});
</script>

<style scoped>
.main-side {
  position: fixed;
  height: 100vh;
  width: calc(100% - 400px);
}

.sidebar-side {
  max-width: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
