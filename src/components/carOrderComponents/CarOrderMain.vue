<template>
  <v-col>
    <v-window class="main-side" v-model="onboarding" show-arrows="hover">
      <v-window-item class="main-side" v-for="n in length" :key="`card-${n}`">
        <v-card
          color="grey-lighten-4"
          flat
          class="main-side d-flex align-center justify-center ma-2"
        >
          <v-img cover :src="pictureSlides[n - 1]"></v-img>
        </v-card>
      </v-window-item>
    </v-window>
  </v-col>
</template>

<script setup>
import { defineProps, computed, ref, onMounted, onBeforeUnmount } from "vue";
const length = ref(3);
const onboarding = ref(0);
const pictureSlides = ref([
  "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY13,$PPSW,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&",
  "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY13,$PPSW,$WY19B,$INPB0&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=1&crop=0,0,80,0&",
  "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$INPB0,$PPSW,$DV2W&view=STUD_SEAT&model=my&size=1441&bkba_opt=2&crop=0,0,0,0&",
  "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY13,$PPSW,$WY19B,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&",
]);

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
  if (scrollPosition <= 500) {
    onboarding.value = 0;
  } else if (scrollPosition > 500 && scrollPosition < 1000) {
    onboarding.value = 1;
  } else {
    onboarding.value = 2;
  }
  console.log(scrollPosition);
  console.log(carModel);
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
  height: 88vh;
  width: calc(100% - 400px);
}

.sidebar-side {
  max-width: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
