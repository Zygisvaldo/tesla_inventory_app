<template>
  <v-col>
    <v-window class="main-side" v-model="onboarding" show-arrows="hover">
      <v-window-item class="main-side" v-for="n in length" :key="`card-${n}`">
        <v-card flat class="main-side d-flex align-center justify-center">
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

const propsToUse = defineProps({
  carPictures: { type: Array, required: true },
});

const pictureSlides = computed(() => {
  return propsToUse.carPictures;
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
  color: bg-white;
  position: fixed;
  height: 88vh;
  width: calc(100% - 400px);
}
</style>
