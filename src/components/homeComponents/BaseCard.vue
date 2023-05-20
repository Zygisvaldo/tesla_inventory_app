<template>
  <v-container style="height: 100px" class="ma-3 pa-3">
    <v-row>
      <v-col cols="auto" class="me-auto">
        <p>
          <v-icon>
            <v-img class="custom-icon" :src="infoSrc"> </v-img>
          </v-icon>
          <span>Tilgængelig for hurtig levering</span>
        </p>
      </v-col>
    </v-row>
  </v-container>
  <v-card flat class="bg-grey-lighten-4 ma-0">
    <v-card-text>
      <v-row>
        <v-col
          v-for="card in inventoryCars"
          :key="card.id"
          sm="12"
          md="6"
          lg="4"
          style="min-width: 485px"
        >
          <v-card
            flat
            class="ma-2 px-2 pt-2 pb-10 card-container"
            @mouseenter="card.isHovering = true"
            @mouseleave="card.isHovering = false"
          >
            <v-card-item>
              <v-row>
                <v-col cols="8"
                  ><h5 class="text-h5 font-weight-medium">{{ card.model }}</h5>
                  <span class="text-subtitle-1 text-grey-darken-2">
                    <p class="drive-unit">{{ card.driveUnit }}</p>
                  </span>
                  <span class="text-body-2 text-grey-darken-1">
                    <p>{{ card.location }}</p>
                    <p>Klar til levering</p>
                  </span>
                </v-col>
                <v-spacer></v-spacer>
                <v-col style="max-height: 50px" cols="4" class="text-right"
                  ><h5 class="text-h5 font-weight-medium">
                    {{ card.price }}
                  </h5></v-col
                >
              </v-row>
            </v-card-item>
            <v-window v-model="card.currentSlide" show-arrows="hover">
              <v-window-item v-for="(slide, index) in card.slides" :key="index">
                <v-card
                  elevation="0"
                  height="300"
                  class="flat-card d-flex align-center justify-center ma-2"
                >
                  <v-img
                    :width="300"
                    aspect-ratio="16/9"
                    cover
                    :src="slide"
                  ></v-img>

                  <h1 class="text-h2"></h1>
                </v-card>
              </v-window-item>
            </v-window>
            <v-card-item>
              <v-row v-if="!card.isHovering" class="fixed-height-row">
                <v-col class="text-center">
                  <p>
                    <span class="text-h5 font-weight-medium">{{
                      card.range
                    }}</span>
                    <span class="text-body-1 text-grey-darken-1"> km</span>
                  </p>
                  <p class="text-body-1 text-grey-darken-1">
                    Rækkevidde (WLTP)
                  </p>
                </v-col>
                <v-col class="text-center">
                  <p>
                    <span class="text-h5 font-weight-medium">{{
                      card.topSpeed
                    }}</span>
                    <span class="text-body-1 text-grey-darken-1"> km/t</span>
                  </p>
                  <p class="text-body-1 text-grey-darken-1">Tophastighed</p>
                </v-col>
                <v-col class="text-center">
                  <p>
                    <span class="text-h5 font-weight-medium">{{
                      card.acceleration
                    }}</span>
                    <span class="text-body-1 text-grey-darken-1"> s</span>
                  </p>
                  <p class="text-body-1 text-grey-darken-1">0-100 km/t</p>
                </v-col>
              </v-row>
              <v-row v-else class="fixed-height-row">
                <v-col>
                  <v-btn block variant="outlined" color="gray-lighten-4"
                    >Se detaljer</v-btn
                  >
                </v-col>
              </v-row>
            </v-card-item>
            <v-card-item>
              <v-row class="text-body-2 text-grey-darken-1">
                <v-col class="text-left">
                  <p>{{ card.color }}</p>
                  <p>{{ card.wheels }}</p>
                  <p>{{ card.interior }}</p>
                </v-col>
                <v-col class="text-left">
                  <p v-if="card.autopilot">
                    <v-icon>
                      <v-img class="custom-icon" :src="autoPilotIconSrc">
                      </v-img>
                    </v-icon>
                    <span>Autopilot</span>
                  </p>
                  <p v-if="card.connectivity">
                    <v-icon>
                      <v-img class="custom-icon" :src="connectivitySrc"></v-img>
                    </v-icon>
                    <span> 30 dage prøveperiode med Premium Connectivity </span>
                  </p>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { ref, computed, onBeforeMount } from "vue";

import {
  autoPilotIconSrc,
  connectivitySrc,
  infoSrc,
} from "../../assets/autoPilotIcon.js";
import { useStore } from "vuex";

export default {
  setup() {
    const autoPilotIconSrcRef = ref(autoPilotIconSrc);
    const connectivitySrcRef = ref(connectivitySrc);
    const infoSrcRef = ref(infoSrc);
    const length = ref(3);
    const onboarding = ref([]);
    const isHovering = ref(false);
    const store = useStore();

    const inventoryCars = computed(function () {
      console.log(store.getters["getInventoryCars"]);
      return store.getters["getInventoryCars"];
    });

    onBeforeMount(async () => {
      await loadInventory();
      console.log(inventoryCars.value);
    });

    async function loadInventory() {
      await store.dispatch("loadInventory");
      console.log(inventoryCars.value);
    }

    function addCar() {
      store.dispatch("addInventoryCar");
    }

    return {
      length,
      onboarding,
      isHovering,
      autoPilotIconSrc: autoPilotIconSrcRef,
      connectivitySrc: connectivitySrcRef,
      infoSrc: infoSrcRef,
      addCar,
      loadInventory,
      inventoryCars,
    };
  },
};
</script>

<style scoped>
.fixed-height-row {
  height: 75px; /* Adjust the height value as needed */
}
.custom-icon {
  transform: scale(0.7);
}
.card-container {
  height: 630px; /* Adjust the height value as needed */
}
.drive-unit {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
