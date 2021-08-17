<template>
    <TopNavbar />
    <div class="flex items-center container mx-auto md:px-64 bg-white py-3">
        <Logo />
        <Search />
    </div>
</template>

<script>
import TopNavbar from './TopNavbar.vue'
import Logo from './LogoHeader.vue'
import Search from './SearchComponent.vue'
export default {
    components: {
        TopNavbar,
        Logo,
        Search
    }
}
</script>

<style>

</style>