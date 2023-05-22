<template>
  <v-row class="bg-white">
    <v-col>
      <CarOrderMain :carPictures="carPictures" :carModel="carModel" />
    </v-col>
    <v-col class="sidebar-side">
      <CarOrderSideBar :carModel="carModel" />
    </v-col>
  </v-row>
</template>

<script setup>
import CarOrderMain from "../components/carOrderComponents/CarOrderMain.vue";
import CarOrderSideBar from "../components/carOrderComponents/CarOrderSideBar.vue";
import { watch, defineProps, computed, onBeforeMount } from "vue";
import { useStore } from "vuex";

const store = useStore();

onBeforeMount(async function () {

  await store.dispatch("loadCarOrderOptions", carModel.value);
});

const carPictures = computed(() => {
  return store.getters["getCarPictures"];
});

const propsToUse = defineProps({
  carId: { type: String, required: true },
});

watch(propsToUse, () => {
  store.dispatch("loadCarOrderOptions", carModel.value);
});

const carModel = computed(() => {
  return propsToUse.carId;
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
