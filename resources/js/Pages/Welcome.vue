<template>
    <Header />
    <div class="bg-gray-100 h-screen">
        <!-- Hero section -->
        <div class="w-full container px-64 py-6">
            <!-- Categories section -->
            <div class="bg-white p-4 rounded-xl w-1/4">
                <p class="flex items-center">
                    <CategoriesIcon class="w-6 h-6 mr-2" />
                    Categories
                </p>
                <ul class="space-y-1 mt-4 text-sm cursor-pointer">
                    <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <WomenClothesIcon class="h-6 w-6 mr-2" />
                        <a href="/">Woman's Fashion</a>
                    </li>
                    <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <TshirtIcon class="h-5 w-5 mr-2" />
                        <a href="/">Men's Fashion</a>
                    </li>
                    <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <PhoneIcon class="h-6 w-6 mr-2" />
                        <a href="/">Phones & Telecommunications</a>
                    </li>
                    <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <ComputerIcon class="h-6 w-6 mr-2" />
                        <a href="/">Computer, Office & Security</a>
                    </li>
                    <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <CameraIcon class="h-6 w-6 mr-2" />
                        <a href="/">Consumer Electronics</a>
                    </li>
                    <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <JewelryIcon class="h-6 w-6 mr-2" />
                        <a href="/">Jewelry & Watches</a>
                    </li>
                    <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <HomeFurnitureIcon class="h-6 w-6 mr-2" />
                        <a href="/">Home, Pet & Appliances</a>
                    </li>
                    <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <BagIcon class="h-6 w-6 mr-2" />
                        <a href="/">Bags & Shoes</a>
                    </li>
                    <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <BabiesIcon class="h-6 w-6 mr-2" />
                        <a href="/">Toys , Kids & Babies</a>
                    </li>
                    <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <SportIcon class="h-6 w-6 mr-2" />
                        <a href="/">Outdoor Fun & Sports</a>
                    </li>
                    <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <BeautyIcon class="h-6 w-6 mr-2" />
                        <a href="/">Beauty, Health & Hair</a>
                    </li>
                    <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <AutomotiveIcon class="h-6 w-6 mr-2" />
                        <a href="/">Automobiles & Motorcycles</a>
                    </li>
                    <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <HomeToolsIcon class="h-6 w-6 mr-2" />
                        <a href="/">Home Improvement & Tools</a>
                    </li>
                </ul>
            </div>

            <!-- Slider section -->
            <div class="w-2/4 bg-white"></div>

            <!-- WelcomeProfile section -->
            <div class="w-1/4 bg-white"></div>
        </div>
    </div>
</template>

<script>

import Header from '../Components/Header'
import CategoriesIcon from '../Components/Icons/Categories/CategoriesIcon'
import WomenClothesIcon from '../Components/Icons/Categories/WomenClothesIcon'
import TshirtIcon from '../Components/Icons/Categories/TshirtIcon'
import PhoneIcon from '../Components/Icons/Categories/PhoneIcon'
import ComputerIcon from '../Components/Icons/Categories/ComputerIcon'
import CameraIcon from '../Components/Icons/Categories/CameraIcon'
import JewelryIcon from '../Components/Icons/Categories/JewelryIcon'
import HomeFurnitureIcon from '../Components/Icons/Categories/HomeFurnitureIcon'
import BagIcon from '../Components/Icons/Categories/BagIcon'
import BabiesIcon from '../Components/Icons/Categories/BabiesIcon'
import SportIcon from '../Components/Icons/Categories/SportIcon'
import BeautyIcon from '../Components/Icons/Categories/BeautyIcon'
import AutomotiveIcon from '../Components/Icons/Categories/AutomotiveIcon'
import HomeToolsIcon from '../Components/Icons/Categories/HomeToolsIcon'

    export default {
        components: {
            Header,
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
            HomeToolsIcon
        },

        props: {}
    }
</script>

<style scoped>

</style>