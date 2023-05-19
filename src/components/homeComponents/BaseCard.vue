<template>
  <v-card class="bg-grey-lighten-4">
    <v-card-text>
      <v-row>
        <v-col v-for="n in 12" :key="n" xs="12" sm="12" md="12" lg="6" xl="4">
          <v-card
            flat
            style="width: auto"
            class="ma-2 px-2 pt-2 pb-10"
            @mouseenter="isHovering = true"
            @mouseleave="isHovering = false"
          >
            <v-card-item>
              <v-row>
                <v-col cols="8"
                  ><h5 class="text-h5 font-weight-medium">Model 3</h5>
                  <span class="text-subtitle-1 text-grey-darken-2">
                    <p>Model 3 baghjulstræk</p>
                  </span>
                  <span class="text-body-2 text-grey-darken-1">
                    <p>Hillerød</p>
                    <p>Klar til levering</p>
                  </span>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="4" class="text-right"
                  ><h5 class="text-h5 font-weight-medium">342.490 kr</h5></v-col
                >
              </v-row>
            </v-card-item>
            <v-window v-model="onboarding" show-arrows="hover">
              <v-window-item v-for="n in length" :key="`card-${n}`">
                <v-card
                  elevation="0"
                  height="300"
                  class="flat-card d-flex align-center justify-center ma-2"
                >
                  <v-img
                    :width="300"
                    aspect-ratio="16/9"
                    cover
                    src="https://static-assets.tesla.com/configurator/compositor?&bkba_opt=1&view=STUD_3QTR&size=1400&model=m3&options=$APBS,$DV2W,$IBB1,$PMNG,$PRM30,$SC04,$MDL3,$W40B,$MT322,$CPF0,$RSF1,$CW03&crop=1400,850,300,130"
                  ></v-img>

                  <h1 class="text-h2"></h1>
                </v-card>
              </v-window-item>
            </v-window>
            <v-card-item>
              <v-row v-if="!isHovering" class="fixed-height-row">
                <v-col class="text-center">
                  <p>
                    <span class="text-h5 font-weight-medium">491</span>
                    <span class="text-body-1 text-grey-darken-1"> km</span>
                  </p>
                  <p class="text-body-1 text-grey-darken-1">
                    Rækkevidde (WLTP)
                  </p>
                </v-col>
                <v-col class="text-center">
                  <p>
                    <span class="text-h5 font-weight-medium">225</span>
                    <span class="text-body-1 text-grey-darken-1"> km/t</span>
                  </p>
                  <p class="text-body-1 text-grey-darken-1">Tophastighed</p>
                </v-col>
                <v-col class="text-center">
                  <p>
                    <span class="text-h5 font-weight-medium">6,1</span>
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
                  <p>Midnight Silver Metallic lak</p>
                  <p>18" Aero-fælge</p>
                  <p>Sort delvist Premium-interiør</p>
                </v-col>
                <v-col class="text-left">
                  <p>
                    <v-icon>
                      <v-img class="custom-icon" :src="autoPilotIconSrc">
                      </v-img>
                    </v-icon>
                    <span>Autopilot</span>
                  </p>
                  <p>
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
import { ref } from "vue";
import {
  autoPilotIconSrc,
  connectivitySrc,
} from "../../assets/autoPilotIcon.js";

export default {
  setup() {
    const autoPilotIconSrcRef = ref(autoPilotIconSrc);
    const connectivitySrcRef = ref(connectivitySrc);
    const length = ref(3);
    const onboarding = ref(0);
    const isHovering = ref(false);

    return {
      length,
      onboarding,
      isHovering,
      autoPilotIconSrc: autoPilotIconSrcRef,
      connectivitySrc: connectivitySrcRef,
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
</style>
