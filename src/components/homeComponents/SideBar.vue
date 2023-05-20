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
        <v-text-field color="white" label="Indtast postnummer"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        ><h5 class="text-subtitle-1 text-grey-darken-2">Søg inden for</h5>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-select :items="items" value="Alle tilgængelige"></v-select>
      </v-col>
    </v-row>
    <div>
      <v-row>
        <v-col>
          <v-radio-group label="Modeller">
            <v-radio label="Model S" value="1"></v-radio>
            <v-radio label="Model 3" value="2"></v-radio>
            <v-radio label="Model X" value="3"></v-radio>
            <v-radio label="Model Y" value="4"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col>
          <v-radio-group label="Lagertype">
            <v-radio label="Nye" value="1"></v-radio>
            <v-radio label="Brugt" value="2"></v-radio>
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
          <v-checkbox label="Performance firehjulstræk"></v-checkbox>
          <v-checkbox label="Long Range firehjulstræk"></v-checkbox>
          <v-checkbox label="Long Range med baghjulstræk"></v-checkbox>
          <v-checkbox label="Model 3 baghjulstræk"></v-checkbox>
        </v-checkbox-group>
      </v-col>
    </v-row>
    <v-row>
      <h5 class="text-subtitle-1 text-grey-darken-2 mx-2 px-2">Lakering</h5>
      <v-col class="d-flex justify-sm-space-between px-4 pt-2 pb-6">
        <v-btn icon variant="outlined">
          <v-img
            src="https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/ExtWhite@3x.png"
          ></v-img>
        </v-btn>

        <v-btn icon variant="outlined">
          <v-img
            src="https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/ExtBlack@3x.png"
          ></v-img>
        </v-btn>

        <v-btn icon variant="outlined">
          <v-img
            src="https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/ExtBlue@3x.png"
          ></v-img>
        </v-btn>

        <v-btn icon variant="outlined">
          <v-img
            src="https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/ExtRed@3x.png"
          ></v-img>
        </v-btn>

        <v-btn icon variant="outlined">
          <v-img
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
        <v-btn icon variant="outlined" class="mx-1">
          <v-img
            src="https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/IntBlack@3x.png"
          ></v-img>
        </v-btn>
        <v-btn icon variant="outlined" class="mx-2">
          <v-img
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
            <v-checkbox label='18" fælge'></v-checkbox>
            <v-checkbox label='19" fælge'></v-checkbox>
            <v-checkbox label='18" hjul'></v-checkbox>
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
            <v-checkbox label="Autopilot"></v-checkbox>
            <v-checkbox label='19" fælge'></v-checkbox>
            <v-checkbox label="Fuldt selvkørende"></v-checkbox>
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
            <v-checkbox label="Performance-opgradering"></v-checkbox>
            <v-checkbox label="Anhængertræk"></v-checkbox>
            <v-checkbox label="Opvarmede bagsæder"></v-checkbox>
          </v-checkbox-group>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const items = ref(["100 kilometer", "200 kilometer", "Alle tilgængelige"]);
</script>
