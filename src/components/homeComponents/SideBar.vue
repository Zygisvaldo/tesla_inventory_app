<template>
  <v-container class="ml-4 pl-4" style="max-width: 350px">
    <v-row>
      <v-col>
        <h5 class="text-subtitle-1 text-grey-darken-2">
          Postnummer for registrering
        </h5>
        <p class="text-body-2 text-grey-darken-1">
          Hvor du vil registrere køretøjet
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="postFilter"
          color="white"
          label="Indtast postnummer"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        ><h5 class="text-subtitle-1 text-grey-darken-2">Søg inden for</h5>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-select
          v-model="distanceFilter"
          :items="items"
          value="Alle tilgængelige"
        ></v-select>
      </v-col>
    </v-row>
    <div>
      <v-row>
        <v-col>
          <v-radio-group v-model="modelFilter" label="Modeller">
            <v-radio label="Model S" value="Model S"></v-radio>
            <v-radio label="Model 3" value="Model 3"></v-radio>
            <v-radio label="Model X" value="Model X"></v-radio>
            <v-radio label="Model Y" value="Model Y"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col>
          <v-radio-group v-model="typeFilter" label="Lagertype">
            <v-radio label="Nye" value="nye"></v-radio>
            <v-radio label="Brugt" value="brugt"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
    </div>
    <v-row>
      <v-col>
        <v-checkbox-group>
          <h5 class="text-subtitle-1 text-grey-darken-2 mx-1 px-1">
            Udstyrsvariant
          </h5>
          <v-checkbox
            v-model="driveUnitOptionsFilter"
            value="Model 3 Performance Dual Motor firehjulstræk"
            label="Performance firehjulstræk"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="driveUnitOptionsFilter"
            value="Model 3 Long Range Dual Motor firehjulstræk"
            label="Long Range firehjulstræk"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="driveUnitOptionsFilter"
            value="Model 3 Long Range med baghjulstræk"
            label="Long Range med baghjulstræk"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="driveUnitOptionsFilter"
            value="Model 3 baghjulstræk"
            label="Model 3 baghjulstræk"
            hide-details
          ></v-checkbox>
        </v-checkbox-group>
      </v-col>
    </v-row>
    <v-row>
      <h5 class="text-subtitle-1 text-grey-darken-2 mx-2 px-2">Lakering</h5>
      <v-col class="d-flex justify-sm-space-between px-4 pt-2 pb-6">
        <v-btn
          @click="
            colorExtFilter =
              colorExtFilter === 'Pearl White lakering'
                ? ''
                : 'Pearl White lakering'
          "
          icon
        >
          <v-img
            active-class="highlighted"
            :class="{ highlighted: colorExtFilter === 'Pearl White lakering' }"
            src="https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/ExtWhite@3x.png"
          ></v-img>
        </v-btn>

        <v-btn
          @click="
            colorExtFilter =
              colorExtFilter === 'Solid Black lak' ? '' : 'Solid Black lak'
          "
          icon
        >
          <v-img
            active-class="highlighted"
            :class="{ highlighted: colorExtFilter === 'Solid Black lak' }"
            src="https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/ExtBlack@3x.png"
          ></v-img>
        </v-btn>

        <v-btn
          @click="
            colorExtFilter =
              colorExtFilter === 'Deep Blue Metallic lak'
                ? ''
                : 'Deep Blue Metallic lak'
          "
          icon
        >
          <v-img
            active-class="highlighted"
            :class="{
              highlighted: colorExtFilter === 'Deep Blue Metallic lak',
            }"
            src="https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/ExtBlue@3x.png"
          ></v-img>
        </v-btn>

        <v-btn
          @click="
            colorExtFilter =
              colorExtFilter === 'Red Multi-Coat lakering'
                ? ''
                : 'Red Multi-Coat lakering'
          "
          icon
        >
          <v-img
            active-class="highlighted"
            :class="{
              highlighted: colorExtFilter === 'Red Multi-Coat lakering',
            }"
            src="https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/ExtRed@3x.png"
          ></v-img>
        </v-btn>

        <v-btn
          @click="
            colorExtFilter =
              colorExtFilter === 'Midnight Silver Metallic lak'
                ? ''
                : 'Midnight Silver Metallic lak'
          "
          icon
        >
          <v-img
            active-class="highlighted"
            :class="{
              highlighted: colorExtFilter === 'Midnight Silver Metallic lak',
            }"
            src="https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/ExtGrey@3x.png"
          ></v-img>
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <h5 class="text-subtitle-1 text-grey-darken-2 mx-2 px-2">
        Interiørfarve
      </h5>
      <v-col cols="12">
        <v-btn
          @click="
            colorIntFilter =
              colorIntFilter === 'Sort Premium-interiør'
                ? ''
                : 'Sort Premium-interiør'
          "
          icon
          class="mx-1"
        >
          <v-img
            active-class="highlighted"
            :class="{
              highlighted: colorIntFilter === 'Sort Premium-interiør',
            }"
            src="https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/IntBlack@3x.png"
          ></v-img>
        </v-btn>
        <v-btn
          @click="
            colorIntFilter =
              colorIntFilter === 'Hvid Premium-interiør'
                ? ''
                : 'Hvid Premium-interiør'
          "
          icon
          class="mx-2"
        >
          <v-img
            active-class="highlighted"
            :class="{
              highlighted: colorIntFilter === 'Hvid Premium-interiør',
            }"
            src="https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/IntWhite@3x.png"
          ></v-img>
        </v-btn>
      </v-col>
    </v-row>

    <div>
      <v-row>
        <v-col>
          <v-checkbox-group>
            <h5 class="text-subtitle-1 text-grey-darken-2 mx-1 px-1">Fælg</h5>
            <v-checkbox
              v-model="wheelsOptionsFilter"
              value='18" Aero-fælge'
              label='18" fælge'
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="wheelsOptionsFilter"
              value='19" Sport-fælge'
              label='19" fælge'
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="wheelsOptionsFilter"
              value='20" Uberturbine-fælge'
              label='20" hjul'
              hide-details
            ></v-checkbox>
          </v-checkbox-group>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-row>
        <v-col>
          <v-checkbox-group>
            <h5 class="text-subtitle-1 text-grey-darken-2 mx-1 px-1">
              Autopilot
            </h5>
            <v-checkbox
              v-model="autoPilotOptionsFilter"
              label="Autopilot"
              value="autopilot"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="autoPilotOptionsFilter"
              label="Fuldt selvkørende"
              value="Fuldt selvkørende"
              hide-details
            ></v-checkbox>
          </v-checkbox-group>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-row>
        <v-col>
          <v-checkbox-group>
            <h5 class="text-subtitle-1 text-grey-darken-2 mx-1 px-1">
              Tilvalg
            </h5>
            <v-checkbox
              v-model="optionsFilter"
              label="Performance-opgradering"
              value="Performance-opgradering"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="optionsFilter"
              value="Anhængertræk"
              label="Anhængertræk"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="optionsFilter"
              value="Opvarmede bagsæder"
              label="Opvarmede bagsæder"
              hide-details
            ></v-checkbox>
          </v-checkbox-group>
        </v-col>
      </v-row>
    </div>
  </v-container>
  <p v-show="false">{{ filteredInventory }}</p>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
const items = ref(["100 kilometer", "200 kilometer", "Alle tilgængelige"]);
const store = useStore();
const postFilter = ref("");
const distanceFilter = ref("");
const typeFilter = ref("");
const modelFilter = ref("");
const colorExtFilter = ref("");
const colorIntFilter = ref("");
const driveUnitOptionsFilter = ref([]);
const autoPilotOptionsFilter = ref([]);
const wheelsOptionsFilter = ref([]);
const optionsFilter = ref([]);

const existingInventory = computed(function () {
  return store.getters["getInventoryCars"];
});

const filteredInventory = computed(() => {
  const filterFunction = (car) => {
    const matchesPost = postFilter.value ? car.post === postFilter.value : true;

    const matchesDistance = distanceFilter.value
      ? car.distance === distanceFilter.value
      : true;

    const matchesType = typeFilter.value ? car.type === typeFilter.value : true;

    const matchesModel = modelFilter.value
      ? car.model === modelFilter.value
      : true;

    const matchesColorExt = colorExtFilter.value
      ? car.color === colorExtFilter.value
      : true;

    const matchesColorInt = colorIntFilter.value
      ? car.interior === colorIntFilter.value
      : true;

    const matchesDriveUnitOptions =
      driveUnitOptionsFilter.value.length > 0
        ? driveUnitOptionsFilter.value.includes(car.driveUnit)
        : true;
    const matchesAutoPilotOptions =
      autoPilotOptionsFilter.value.length > 0
        ? autoPilotOptionsFilter.value.includes(car.autopilot)
        : true;
    const matchesWheelsOptions =
      wheelsOptionsFilter.value.length > 0
        ? wheelsOptionsFilter.value.includes(car.wheels)
        : true;

    return (
      matchesPost &&
      matchesDistance &&
      matchesType &&
      matchesModel &&
      matchesColorExt &&
      matchesColorInt &&
      matchesDriveUnitOptions &&
      matchesAutoPilotOptions &&
      matchesWheelsOptions
    );
  };
  store.dispatch(
    "setFilteredInventoryCars",
    existingInventory.value.filter(filterFunction)
  );
  return existingInventory.value.filter(filterFunction);
});
onMounted(() => {
  console.log(filteredInventory.value);
});
</script>

<style scoped>
.highlighted {
  border: 3px solid #2962ff;
  border-radius: 25px;
  width: 50px;
  box-sizing: border-box;
  padding: 1px;
}
</style>
