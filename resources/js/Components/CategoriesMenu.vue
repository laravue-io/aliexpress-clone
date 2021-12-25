<template>
  <div class="bg-white py-4 rounded-xl">
    <p class="flex items-center px-4">
      <CategoriesIcon class="w-6 h-6 mr-2" />
      Categories
    </p>
    <ul class="space-y-1 mt-2 text-sm cursor-pointer">
      <li
        class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-4"
      >
        <WomenClothesIcon class="h-6 w-6 mr-2" />
        <a href="/">Woman's Fashion</a>
      </li>
      <li
        class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-4"
      >
        <TshirtIcon class="h-5 w-5 mr-2" />
        <a href="/">Men's Fashion</a>
      </li>
      <li
        class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-4"
      >
        <PhoneIcon class="h-6 w-6 mr-2" />
        <a href="/">Phones & Telecommunications</a>
      </li>
      <li
        class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-4"
      >
        <ComputerIcon class="h-6 w-6 mr-2" />
        <a href="/">Computer, Office & Security</a>
      </li>
      <li
        class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-4"
      >
        <CameraIcon class="h-6 w-6 mr-2" />
        <a href="/">Consumer Electronics</a>
      </li>
      <li
        class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-4"
      >
        <JewelryIcon class="h-6 w-6 mr-2" />
        <a href="/">Jewelry & Watches</a>
      </li>
      <li
        class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-4"
      >
        <HomeFurnitureIcon class="h-6 w-6 mr-2" />
        <a href="/">Home, Pet & Appliances</a>
      </li>
      <li
        class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-4"
      >
        <BagIcon class="h-6 w-6 mr-2" />
        <a href="/">Bags & Shoes</a>
      </li>
      <li
        class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-4"
      >
        <BabiesIcon class="h-6 w-6 mr-2" />
        <a href="/">Toys , Kids & Babies</a>
      </li>
      <li
        class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-4"
      >
        <SportIcon class="h-6 w-6 mr-2" />
        <a href="/">Outdoor Fun & Sports</a>
      </li>
      <li
        class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-4"
      >
        <BeautyIcon class="h-6 w-6 mr-2" />
        <a href="/">Beauty, Health & Hair</a>
      </li>
      <li
        class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-4"
      >
        <AutomotiveIcon class="h-6 w-6 mr-2" />
        <a href="/">Automobiles & Motorcycles</a>
      </li>
      <li
        class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-4"
      >
        <HomeToolsIcon class="h-6 w-6 mr-2" />
        <a href="/">Home Improvement & Tools</a>
      </li>
    </ul>
  </div>
</template>

<script>

import CategoriesIcon from "../Components/Icons/Categories/CategoriesIcon";
import WomenClothesIcon from "../Components/Icons/Categories/WomenClothesIcon";
import TshirtIcon from "../Components/Icons/Categories/TshirtIcon";
import PhoneIcon from "../Components/Icons/Categories/PhoneIcon";
import ComputerIcon from "../Components/Icons/Categories/ComputerIcon";
import CameraIcon from "../Components/Icons/Categories/CameraIcon";
import JewelryIcon from "../Components/Icons/Categories/JewelryIcon";
import HomeFurnitureIcon from "../Components/Icons/Categories/HomeFurnitureIcon";
import BagIcon from "../Components/Icons/Categories/BagIcon";
import BabiesIcon from "../Components/Icons/Categories/BabiesIcon";
import SportIcon from "../Components/Icons/Categories/SportIcon";
import BeautyIcon from "../Components/Icons/Categories/BeautyIcon";
import AutomotiveIcon from "../Components/Icons/Categories/AutomotiveIcon";
import HomeToolsIcon from "../Components/Icons/Categories/HomeToolsIcon";

export default {
  components: {
    CategoriesIcon,
    WomenClothesIcon,
    TshirtIcon,
    PhoneIcon,
    ComputerIcon,
    CameraIcon,
    JewelryIcon,
    HomeFurnitureIcon,
    BagIcon,
    BabiesIcon,
    SportIcon,
    BeautyIcon,
    AutomotiveIcon,
    HomeToolsIcon,
  },
};
</script>

<style>
</style>