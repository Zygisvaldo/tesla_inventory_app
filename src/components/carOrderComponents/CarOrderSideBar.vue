<template>
  <v-container color="bg-grey" style="max-width: 350px">
    <v-row>
      <v-col>
        <h5 class="text-h3 text-black d-flex justify-center">
          Model {{ props.carModel }}
        </h5>
        <p class="text-body-1 text-grey-darken-1 d-flex justify-center">
          Anslået levering: juli – aug. 2023
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <p>
          <span class="text-h5 font-weight-medium">{{
            selectedCarOptions.range
          }}</span>
          <span class="text-body-1 text-grey-darken-1"> km</span>
        </p>
        <p class="text-body-2 text-grey-darken-1">Rækkevidde (WLTP)</p>
      </v-col>

      <v-col class="text-center">
        <p>
          <span class="text-h5 font-weight-medium">{{
            selectedCarOptions.topSpeed
          }}</span>
          <span class="text-body-1 text-grey-darken-1"> km/t</span>
        </p>
        <p class="text-body-2 text-grey-darken-1">Tophastighed</p>
      </v-col>
      <v-col class="text-center">
        <p>
          <span class="text-h5 font-weight-medium">{{
            selectedCarOptions.acceleration
          }}</span>
          <span class="text-body-2 text-grey-darken-1"> s</span>
        </p>
        <p class="text-body-2 text-grey-darken-1">0-100 km/t</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <v-col class="mt-1 pt-1 mb-0 pb-0">
            <span class="text-body-2 text-black">Dual Motor firehjulstræk</span>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-btn
              :active="selectedTrimOption === 0 ? true : false"
              @click="selectedTrimOption = 0"
              variant="outlined"
              class="w-100 mb-2 d-flex justify-space-between"
            >
              <v-row>
                <v-col class="text-grey-darken-1"
                  >Model {{ carModel }} Long Range
                  {{ longRangePrice }} kr</v-col
                >
              </v-row>
            </v-btn>
            <v-btn
              :active="selectedTrimOption === 1 ? true : false"
              @click="selectedTrimOption = 1"
              variant="outlined"
              class="w-100 d-flex justify-space-between"
            >
              <v-row class="my2 py-2">
                <v-col class="text-grey-darken-1"
                  >Model {{ carModel }} Performance
                  {{ performancePrice }} kr</v-col
                >
              </v-row>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-btn
          variant="tonal"
          class="text-body-2 mt-10"
          color="grey"
          width="150"
        >
          <span class="text-black">Funktioner</span>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center my-10 py-10">
      <h5 class="text-h4 text-black mx-2 my-4 py-4 px-2">Lak</h5>
      <v-col class="d-flex justify-sm-space-between px-4 pt-2 pb-6">
        <v-btn
          @click="
            carColor = 'white';
            colorExtFilter =
              colorExtFilter === 'Pearl White lakering'
                ? ''
                : 'Pearl White lakering';
          "
          icon
        >
          <v-img
            active-class="highlighted"
            :class="{ highlighted: carColor === 'white' }"
            src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_White.png?"
          ></v-img>
        </v-btn>

        <v-btn
          @click="
            carColor = 'black';
            colorExtFilter =
              colorExtFilter === 'Solid Black lak' ? '' : 'Solid Black lak';
          "
          icon
        >
          <v-img
            active-class="highlighted"
            :class="{ highlighted: carColor === 'black' }"
            src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Black.png?"
          ></v-img>
        </v-btn>

        <v-btn
          @click="
            carColor = 'blue';
            colorExtFilter =
              colorExtFilter === 'Deep Blue Metallic lak'
                ? ''
                : 'Deep Blue Metallic lak';
          "
          icon
        >
          <v-img
            active-class="highlighted"
            :class="{ highlighted: carColor === 'blue' }"
            src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Blue.png?"
          ></v-img>
        </v-btn>

        <v-btn
          @click="
            carColor = 'red';
            colorExtFilter =
              colorExtFilter === 'Red Multi-Coat lakering'
                ? ''
                : 'Red Multi-Coat lakering';
          "
          icon
        >
          <v-img
            active-class="highlighted"
            :class="{ highlighted: carColor === 'red' }"
            src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Red.png?"
          ></v-img>
        </v-btn>

        <v-btn
          @click="
            carColor = 'gray';
            colorExtFilter =
              colorExtFilter === 'Midnight Silver Metallic lak'
                ? ''
                : 'Midnight Silver Metallic lak';
          "
          icon
        >
          <v-img
            active-class="highlighted"
            :class="{ highlighted: carColor === 'gray' }"
            src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_MidnightSilver.png?"
          ></v-img>
        </v-btn>
      </v-col>
      <p>
        <span class="text-body-1 text-black">{{
          carColor[0].toUpperCase() + carColor.slice(1)
        }}</span>
        <span
          v-if="carColor === 'white'"
          class="text-body-1 text-grey-darken-1"
        >
          Inkluderet</span
        >
        <span v-else class="text-body-1 text-grey-darken-1"> 2.500 kr</span>
      </p>
    </v-row>
    <v-row class="d-flex justify-center mt-10 pt-10">
      <h5 class="text-h4 text-black mx-2 my-2 py-2 px-2">Fælge</h5>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col class="d-flex justify-end">
        <v-btn
          @click="
            carWheelsOptions = 0;
            wheelsFilter =
              wheelsFilter === 'gemini_wheels' ? '' : 'gemini_wheels';
          "
          icon
        >
          <v-img
            active-class="highlighted"
            :class="{ highlighted: carWheelsOptions === 0 }"
            src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELY/UI/gemini_wheels.png?"
          ></v-img>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          @click="
            carWheelsOptions = 1;
            wheelsFilter =
              wheelsFilter === 'induction_wheels' ? '' : 'induction_wheels';
          "
          icon
        >
          <v-img
            active-class="highlighted"
            :class="{ highlighted: carWheelsOptions === 1 }"
            src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELY/UI/induction_wheels.png?"
          ></v-img>
        </v-btn>
      </v-col>

      <v-row class="d-flex justify-center mt-2 py-2">
        <p v-if="carWheelsOptions === 0">
          <span class="text-body-1 text-black">19'' Gemini-fælge</span>
          <span class="text-body-1 text-grey-darken-1"> Inkluderet</span>
        </p>
        <p v-else>
          <span class="text-body-1 text-black">20'' Sports-fælge</span>
          <span class="text-body-1 text-grey-darken-1"> 17.500 kr</span>
        </p>
        <p class="text-body-1 text-grey-darken-1">
          Est. rækkevidde som konfigureret: {{ selectedCarOptions.range }} km
        </p>
        <p class="text-h6 text-black mt-3 pt-3">Vinterhjul</p>
      </v-row>
      <v-row class="mt-0 pt-0">
        <v-col class="mt-0 pt-0">
          <v-window v-model="wheelsSlide">
            <v-window-item v-for="n in 2" :key="`card-${n}`">
              <v-card
                flat
                height="100"
                class="d-flex align-center justify-center"
              >
                <div
                  v-if="wheelsSlide === 0"
                  class="d-flex text-center my-2 py-2 text-body-1 text-grey-darken-1"
                >
                  Tilføj et sæt vinterdæk og hjul for optimal kørsel i sne og
                  iskolde forhold
                </div>
                <div v-else>
                  <v-card flat class="d-flex align-center justify-center">
                    <v-img
                      style="max-width: 25%"
                      src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Sottozero-Selector@3x.png?"
                    ></v-img>
                  </v-card>

                  <span class="text-body-1 text-black"
                    >19" Pirelli vinterhjul
                  </span>
                  <span class="text-body-1 text-grey-darken-1">18.590 kr</span>
                </div>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center ma-2 pa-2" v-if="wheelsSlide === 0">
          <v-btn color="blue-darken-3" width="200" @click="wheelsSlide = 1">
            Vælg sæt
          </v-btn>
        </v-col>
        <v-col v-else class="d-flex justify-space-between ma-2 pa-2">
          <v-btn
            variant="outlined"
            color="black"
            class="flex-grow-1 mr-2"
            @click="wheelsSlide = 0"
            >Fjern</v-btn
          >
          <v-btn variant="tonal" class="flex-grow-1 text-body-2" color="grey">
            <span class="text-black">Funktioner</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-row>
    <v-row class="d-flex justify-center mt-10 pt-10">
      <h5 class="text-h4 text-black mx-2 my-2 py-2 px-2">Interiør</h5>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-btn
          @click="
            carInteriorColor = 'black';
            colorIntFilter =
              colorIntFilter === 'Sort Premium-interiør'
                ? ''
                : 'Sort Premium-interiør';
          "
          icon
          class="mx-1"
        >
          <v-img
            active-class="highlighted"
            :class="{ highlighted: carInteriorColor === 'black' }"
            src="https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/IntBlack@3x.png"
          ></v-img>
        </v-btn>
        <v-btn
          @click="
            carInteriorColor = 'white';
            colorIntFilter =
              colorIntFilter === 'Hvid Premium-interiør'
                ? ''
                : 'Hvid Premium-interiør';
          "
          icon
          class="mx-2"
        >
          <v-img
            :class="{ highlighted: carInteriorColor === 'white' }"
            src="https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/IntWhite@3x.png"
          ></v-img>
        </v-btn>
      </v-col>
    </v-row>
    <v-row
      v-if="carInteriorColor === 'black'"
      class="d-flex justify-center mt-2 py-2"
    >
      <p>
        <span class="text-body-1 text-black">Helt sort</span>
        <span class="text-body-1 text-grey-darken-1"> Inkluderet</span>
      </p>
    </v-row>
    <v-row v-else class="d-flex justify-center mt-2 py-2">
      <p>
        <span class="text-body-1 text-black">Helt hvid</span>
        <span class="text-body-1 text-grey-darken-1"> 7.500 kr</span>
      </p>
    </v-row>
    <v-row class="d-flex justify-center">
      <p class="text-h6 text-black mt-3 pt-3">Sædelayout</p>
    </v-row>
    <v-row class="d-flex justify-center mt-2 py-2">
      <p>
        <span class="text-body-1 text-black">Femsæders interiør</span>
        <span class="text-body-1 text-grey-darken-1"> Inkluderet</span>
      </p>
    </v-row>
    <v-row>
      <v-col>
        <v-list lines>
          <v-list-item>
            <v-list-item-subtitle>
              Anden række med justerbare ryglæn
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-subtitle>
              Nedfældelig anden række for maksimal opbevaring af bagage
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-subtitle>
              Elektroniske udløsere i bagagerummet til at nedfælde sæder fladt
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
  <div v-if="false">
    {{ selectedCarOptions }}
    {{ setBaseCarOptions }}
    {{ changeBaseCarOptions }}
    {{ emitCarColor }}
    {{ emitCarWheelsOption }}
    {{ emitInterionColorOption }}
  </div>
</template>

<script setup>
import { watch } from "vue";
import { defineProps, ref, computed, getCurrentInstance } from "vue";
import { useStore } from "vuex";
const store = useStore();
const selectedTrimOption = ref(0);
const wheelsSlide = ref(0);
const longRangePrice = ref("");
const performancePrice = ref("");
const carColor = ref("white");
const carWheelsOptions = ref(0);
const { emit } = getCurrentInstance();
const carInteriorColor = ref("black");

watch(props, () => {
  carColor.value = "white";
  carWheelsOptions.value = 0;
  carInteriorColor.value = "black";
  wheelsSlide.value = 0;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const props = defineProps({
  carModel: { type: String, required: true },
});
const emitCarColor = watch(carColor, function () {
  emit("update:carColor", carColor.value);
});

const emitCarWheelsOption = watch(carWheelsOptions, function () {
  emit("update:CarWheelsOption", carWheelsOptions.value);
});
const emitInterionColorOption = watch(carInteriorColor, function () {
  emit("update:CarInteriorColor", carInteriorColor.value);
});

const carOptions = computed(() => {
  return store.getters["getOrderCarDataOptions"];
});

const selectedCarOptions = ref([]);

const setBaseCarOptions = watch(carOptions, function () {
  selectedCarOptions.value = carOptions.value[selectedTrimOption.value].data;
  longRangePrice.value = carOptions.value[0].data.price;
  performancePrice.value = carOptions.value[1].data.price;
});

const changeBaseCarOptions = watch(selectedTrimOption, function () {
  selectedCarOptions.value = carOptions.value[selectedTrimOption.value].data;
});
</script>
<style scoped>
.sidebar-side {
  max-width: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}
.highlighted {
  border: 3px solid #2962ff;
  border-radius: 25px;
  width: 50px;
  box-sizing: border-box;
  padding: 1px;
}
</style>
