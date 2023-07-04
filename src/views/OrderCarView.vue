<template>
  <v-row class="bg-white">
    <v-col>
      <CarOrderMain :carPictures="carPictures" :carModel="carModel" />
    </v-col>
    <v-col class="sidebar-side">
      <CarOrderSideBar
        :carModel="carModel"
        @update:carColor="handleCarColorUpdate"
        @update:CarWheelsOption="handleCarWheelsOptionUpdate"
        @update:CarInteriorColor="handleCarInteriorColorUpdate"
        @update:carFuntionsPopUp="handlecarFuntionsPopUp"
      />
      <CarBasePopUpVue :dialogOpen="dialogOpen" />
    </v-col>
  </v-row>
</template>

<script setup>
import CarBasePopUpVue from "@/components/carOrderComponents/CarBasePopUp.vue";
import CarOrderMain from "../components/carOrderComponents/CarOrderMain.vue";
import CarOrderSideBar from "../components/carOrderComponents/CarOrderSideBar.vue";
import { watch, defineProps, computed, onBeforeMount, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const color = ref("white");
const wheelsOptionInit = ref(0);
const interiorColorSelected = ref("black");
const pathToFireBase = ref("carColorOptions");
const dialogOpen = ref(false);

function handlecarFuntionsPopUp(openDialogFromSideBar) {
  console.log(openDialogFromSideBar);
  dialogOpen.value = openDialogFromSideBar;
}

function handleCarInteriorColorUpdate(interiorColor) {
  interiorColorSelected.value = interiorColor;
  if (wheelsOptionInit.value === 0 && interiorColor === "white") {
    pathToFireBase.value = "carInteriorColorOptions";
  } else if (wheelsOptionInit.value === 1 && interiorColor === "white") {
    pathToFireBase.value = "carInteriorColorOptions2";
  } else if (wheelsOptionInit.value === 0 && interiorColor === "black") {
    pathToFireBase.value = "carColorOptions";
  } else if (wheelsOptionInit.value === 1 && interiorColor === "black") {
    pathToFireBase.value = "carWheelsOptions";
  }
  store.dispatch("loadCarColorPictures", {
    path: pathToFireBase.value,
    color: color.value,
    carId: carModel.value,
  });
}

function handleCarColorUpdate(newColor) {
  color.value = newColor;
  if (wheelsOptionInit.value === 0 && interiorColorSelected.value === "black") {
    pathToFireBase.value = "carColorOptions";
    store.dispatch("loadCarColorPictures", {
      path: pathToFireBase.value,
      color: newColor,
      carId: carModel.value,
    });
  } else if (
    wheelsOptionInit.value === 1 &&
    interiorColorSelected.value === "black"
  ) {
    handleCarWheelsOptionUpdate(wheelsOptionInit.value);
  } else if (
    wheelsOptionInit.value === 0 &&
    interiorColorSelected.value === "white"
  ) {
    handleCarInteriorColorUpdate(interiorColorSelected.value);
  } else if (
    wheelsOptionInit.value === 1 &&
    interiorColorSelected.value === "white"
  ) {
    handleCarInteriorColorUpdate(interiorColorSelected.value);
  }
}

function handleCarWheelsOptionUpdate(wheelsOption) {
  console.log(wheelsOption);
  if (wheelsOption === 0 && interiorColorSelected.value === "black") {
    wheelsOptionInit.value = wheelsOption;
    handleCarColorUpdate(color.value);
  } else if (wheelsOption === 0 && interiorColorSelected.value === "white") {
    wheelsOptionInit.value = wheelsOption;
    handleCarColorUpdate(color.value);
  } else if (wheelsOption === 1 && interiorColorSelected.value === "white") {
    wheelsOptionInit.value = wheelsOption;
    handleCarColorUpdate(color.value);
  } else {
    store.dispatch("loadCarColorPictures", {
      path: "carWheelsOptions",
      color: color.value,
      carId: carModel.value,
    });
    wheelsOptionInit.value = wheelsOption;
  }
}

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
  color.value = "white";
  interiorColorSelected.value = "black";
  wheelsOptionInit.value = 0;
  pathToFireBase.value = "carColorOptions";
  store.dispatch("loadCarOrderOptions", carModel.value);
});

const carModel = computed(() => {
  return propsToUse.carId;
});
</script>

<style scoped>
.sidebar-side {
  max-width: 400px;
  min-width: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
