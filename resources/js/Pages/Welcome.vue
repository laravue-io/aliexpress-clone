<template>
  <Header />
  <div class="bg-gray-100 h-screen">
    <!-- Hero section -->
    <div
      class="flex justify-between w-full space-x-4 max-w-screen-xl mx-auto py-6"
    >
      <!-- Categories section -->
      <CategoriesMenu class="w-1/5" />

      <!-- Slider section -->
      <div class="w-3/5 space-y-6">
        <div class="space-x-6 font-bold pt-3">
          <a href="#" class="hover:text-red-500">LIVE</a>
          <a href="#" class="hover:text-red-500">Flash Deals</a>
          <a href="#" class="hover:text-red-500">Stores You'll Love</a>
          <a href="#" class="hover:text-red-500">New User Zone</a>
        </div>
        <div>
          <img
            src="https://ae01.alicdn.com/kf/H963baeb18cf34790824e4b02e05f39abe.jpg_Q90.jpg_.webp"
            alt=""
            class="rounded-lg"
          />
        </div>
        <div
          class="
            w-full
            flex
            items-center
            space-x-8
            px-6
            h-64
            bg-gradient-to-r
            from-yellow-500
            to-red-500
            rounded-lg
          "
        >
          <div class="w-1/3 space-y-8">
            <div>
              <h5 class="font-bold text-white">Welcome newcomers</h5>
              <p class="text-white">Exculsive prices for new users: act now!</p>
            </div>
            <button class="bg-red-500 text-white py-4 px-2">
              Get your coupon
            </button>
          </div>
          <div class="flex w-2/3 space-x-1">
            <div class="rounded-lg h-44 py-2 w-28 bg-white">
              <img
                src="https://ae04.alicdn.com/kf/Hce51e7ac756f405ba3c6830ed84d995ef.jpg_120x120Q90.jpg_.webp"
                alt=""
              />
                <div class="mx-auto px-4 py-1">
                    <p
                  class="
                  w-full
                    font-bold
                    text-white
                    bg-red-500
                    rounded-lg
                    text-sm
                    px-2
                  "
                >
                  US $5.60
                </p>
                <p class="w-full text-gray-600 line-through text-sm font-medium">US $7.00</p>
                </div>
            </div>
            <div class="rounded-lg h-44 py-2 w-28 bg-white">
              <img
                src="https://ae04.alicdn.com/kf/Hce51e7ac756f405ba3c6830ed84d995ef.jpg_120x120Q90.jpg_.webp"
                alt=""
              />
                <div class="mx-auto px-4 py-1">
                    <p
                  class="
                  w-full
                    font-bold
                    text-white
                    bg-red-500
                    rounded-lg
                    text-sm
                    px-2
                  "
                >
                  US $5.60
                </p>
                <p class="w-full text-gray-600 line-through text-sm font-medium">US $7.00</p>
                </div>
            </div>
            <div class="rounded-lg h-44 py-2 w-28 bg-white">
              <img
                src="https://ae04.alicdn.com/kf/Hce51e7ac756f405ba3c6830ed84d995ef.jpg_120x120Q90.jpg_.webp"
                alt=""
              />
                <div class="mx-auto px-4 py-1">
                    <p
                  class="
                  w-full
                    font-bold
                    text-white
                    bg-red-500
                    rounded-lg
                    text-sm
                    px-2
                  "
                >
                  US $5.60
                </p>
                <p class="w-full text-gray-600 line-through text-sm font-medium">US $7.00</p>
                </div>
            </div>
            <div class="rounded-lg h-44 py-2 w-28 bg-white">
              <img
                src="https://ae04.alicdn.com/kf/Hce51e7ac756f405ba3c6830ed84d995ef.jpg_120x120Q90.jpg_.webp"
                alt=""
              />
                <div class="mx-auto px-4 py-1">
                    <p
                  class="
                  w-full
                    font-bold
                    text-white
                    bg-red-500
                    rounded-lg
                    text-sm
                    px-2
                  "
                >
                  US $5.60
                </p>
                <p class="w-full text-gray-600 line-through text-sm font-medium">US $7.00</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      <!-- WelcomeProfile section -->
      <div class="w-1/5 bg-white"></div>
    </div>
  </div>
</template>

<script>
import Header from "../Components/Header";
import CategoriesMenu from "../Components/CategoriesMenu";

export default {
  components: {
    Header,
    CategoriesMenu,
  },

  props: {},
};
</script>

<style scoped>
</style>