<template>
  <SideBar />
</template>

<script>
import { defineComponent } from "vue";

// Components
import SideBar from "../components/layout/SideBar.vue";


export default defineComponent({
  name: "HomeView",

  components: {
    SideBar,
  },
});
</script>
