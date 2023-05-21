<template>
  <v-dialog v-model="showingDialog" width="auto">
    <v-progress-circular indeterminate color="white" size="50" class="mx-auto">
    </v-progress-circular>
  </v-dialog>
</template>

<script setup>
import { ref, watch, defineProps } from "vue";
const showingDialog = ref(false);
const props = defineProps({
  openDialog: {
    type: Boolean,
  },
});

watch(
  () => props.openDialog,
  (newValue) => {
    showingDialog.value = newValue;
  }
);
</script>
