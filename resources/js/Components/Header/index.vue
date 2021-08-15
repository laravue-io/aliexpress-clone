<template>
  <div class="flex items-center container mx-auto md:px-64 bg-white py-3">
      <Logo />
      <Search />
  </div>
</template>

<script>
import Logo from './LogoHeader.vue'
import Search from './SearchComponent.vue'
export default {
    components: {
        Logo,
        Search
    }
}
</script>

<style>

</style>