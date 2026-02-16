import { b as usePage, v as vueExports } from "../ssr.js";
import axios from "axios";
import { defineStore } from "pinia";
const usePickupLocationsStore = defineStore("pickupLocations", () => {
  const page = usePage();
  const locationsList = vueExports.shallowRef([...page.props.pickupLocations ?? []]);
  const selectedLocation = vueExports.shallowRef();
  const selectedCity = vueExports.shallowRef();
  const locationCoordinates = vueExports.computed(() => {
    if (selectedLocation.value && selectedLocation.value.longitude && selectedLocation.value.latitude) {
      return [Number(selectedLocation.value.longitude), Number(selectedLocation.value.latitude)];
    }
    if (selectedCity.value && selectedCity.value.longitude && selectedCity.value.latitude) {
      return [Number(selectedCity.value.longitude), Number(selectedCity.value.latitude)];
    }
    return [37.6176, 55.7558];
  });
  const getLocations = async (city_id) => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      const res = await axios.get(route("order.pickup-location-by-city.get"), {
        params: { city_id }
      });
      locationsList.value = [...res.data.data.pickupLocations];
    } catch (e) {
      console.error(e);
    }
  };
  vueExports.watch(selectedCity, () => {
    selectedLocation.value = void 0;
  });
  const resetStore = () => {
    locationsList.value = [...page.props.pickupLocations ?? []];
    selectedLocation.value = void 0;
    selectedCity.value = void 0;
  };
  return {
    locationsList,
    selectedLocation,
    selectedCity,
    locationCoordinates,
    getLocations,
    resetStore
  };
});
const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    vueExports.createStaticVNode('<g clip-path="url(#clip0_3606_683)"><path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="#02283F" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75Z" stroke="#02283F" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3606_683"><rect width="24" height="24" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const IconPin = { render };
export {
  IconPin as I,
  usePickupLocationsStore as u
};
