import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      inventoryCars: [],
      filteredInventoryCars: [],
      carPictures: [],
      orderCarDataOptions: [],
    };
  },
  getters: {
    getInventoryCars(state) {
      return state.inventoryCars;
    },
    getfilteredInventoryCars(state) {
      return state.filteredInventoryCars;
    },
    getCarPictures(state) {
      return state.carPictures;
    },
    getOrderCarDataOptions(state) {
      return state.orderCarDataOptions;
    },
  },
  mutations: {
    setInventoryCars(state, payload) {
      state.inventoryCars = payload;
    },
    setFilteredInventoryCars(state, payload) {
      state.filteredInventoryCars = payload;
    },
    setCarPictures(state, payload) {
      state.carPictures = payload;
    },
    setOrderCarDataOptions(state, payload) {
      state.orderCarDataOptions = payload;
    },
  },
  actions: {
    setFilteredInventoryCars(context, payload) {
      context.commit("setFilteredInventoryCars", payload);
    },

    async loadCarColorPictures(context, payload) {
      try {
        const path = payload.path;
        const color = payload.color;
        const carId = payload.carId.toLowerCase();
        const response = await axios(
          `https://tesla-inventory-cbd1e-default-rtdb.firebaseio.com/${path}/${carId}/${color}.json`
        );
        //console.log(response.data);
        if (response.status !== 200) {
          console.log(response);
        } else {
          console.log();
          context.commit("setCarPictures", response.data);
        }
      } catch (error) {
        alert(error);
      }
    },

    async loadCarOrderOptions(context, carId) {
      try {
        const response = await axios(
          `https://tesla-inventory-cbd1e-default-rtdb.firebaseio.com/carOrderOptions/${carId}.json`
        );

        if (response.status !== 200) {
          console.log(response);
        } else {
          context.commit("setCarPictures", response.data.pictures);
          context.commit("setOrderCarDataOptions", response.data.options);
        }
      } catch (error) {
        alert(error);
      }
    },

    async addInventoryCar() {
      //const carId = new Date().toISOString();
      const carData = {
        model: "Model 3",
        driveUnit: "Model 3 Performance Dual Motor firehjulstræk",
        price: "426.990 kr",
        range: "547",
        topSpeed: "261",
        acceleration: "3.3",
        location: "Greve",
        distance: "Alle tilgængelige",
        color: "Pearl White lakering",
        wheels: '20" Uberturbine-fælge',
        interior: "Sort Premium-interiør",
        autopilot: "autopilot",
        connectivity: true,
        isHovering: false,
        currentSlide: 0,
        type: "nye",
        slides: [
          "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=1&view=STUD_3QTR&size=1400&model=m3&options=$APBS,$BC3R,$DV4W,$IPB1,$PPSW,$PRM31,$SC04,$MDL3,$W33D,$SLR1,$MT325,$PL31,$SPT31,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&",
          "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=1&view=SIDE&size=1400&model=m3&options=$APBS,$BC3R,$DV4W,$IPB1,$PPSW,$PRM31,$SC04,$MDL3,$W33D,$SLR1,$MT325,$PL31,$SPT31,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&",
          "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=1&view=STUD_SEAT&size=1400&model=m3&options=$APBS,$DV2W,$IBB1,$PPSB,$PRM30,$SC04,$TW01,$MDL3,$W40B,$MT322,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&",
        ],
      };
      try {
        const response = await axios.post(
          "https://tesla-inventory-cbd1e-default-rtdb.firebaseio.com/inventory.json",
          carData
        );

        if (response.status !== 200) {
          console.log(response);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async loadInventory(context) {
      try {
        const response = await axios(
          "https://tesla-inventory-cbd1e-default-rtdb.firebaseio.com/inventory.json"
        );
        if (response.status !== 200) {
          console.log(response);
        }
        const cars = [];
        for (const object in response.data) {
          const car = {
            id: object,
            model: response.data[object].model,
            driveUnit: response.data[object].driveUnit,
            price: response.data[object].price,
            range: response.data[object].range,
            topSpeed: response.data[object].topSpeed,
            acceleration: response.data[object].acceleration,
            location: response.data[object].location,
            color: response.data[object].color,
            interior: response.data[object].interior,
            autopilot: response.data[object].autopilot,
            connectivity: response.data[object].connectivity,
            isHovering: response.data[object].isHovering,
            currentSlide: response.data[object].currentSlide,
            slides: response.data[object].slides,
            wheels: response.data[object].wheels,
            type: response.data[object].type,
            distance: response.data[object].distance,
          };
          cars.push(car);
        }
        context.commit("setInventoryCars", cars);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
