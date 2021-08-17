<template>
  <header class="bg-gray-100">
        <nav class="container mx-auto px-8">
            <ul class="flex justify-end space-x-8 py-3 text-sm">
                <li>
                    <a href="/">Sell on aliexpress</a>
                </li>
                <li>
                    <a href="/">Help</a>
                </li>
                <li>
                    <a href="/" class="flex items-center">
                        <WishlistIcon class="h-5 w-5 mr-1" />
                        Wishlist
                    </a>
                </li>
                <li @mouseover="isAccountLinkHovered = true" class="relative cursor-pointer">
                    <span :class="isAccountLinkHovered ? 'text-red-400' : ''" class="flex items-center">
                        <UserIcon class="h-5 w-5 mr-1" />
                        Account
                    </span>
                    <div v-if="isAccountLinkHovered" @mouseleave="isAccountLinkHovered = false" class="absolute right-0 w-max h-max p-4 bg-white border-2 border-gray-300 mt-3 z-50">
                        <span class="text-base text-gray-500">Welcome to Aliexpress!</span>
                        <div class="flex space-x-2 py-2 border-b-2 border-gray-200">
                            <a href="/register" class="bg-red-500 text-white py-2 px-8 text-center font-bold rounded-sm">Join</a>
                            <a href="/login" class="bg-red-100 text-red-500 py-2 px-8 text-center font-bold rounded-sm">Sign in</a>
                        </div>
                        <ul class="my-3 text-sm text-gray-500 space-y-3">
                            <li>
                                <a href="/" class="hover:text-red-500">My Orders</a>
                            </li>
                            <li>
                                <a href="/" class="hover:text-red-500">My Wishlist</a>
                            </li>
                            <li>
                                <a href="/" class="hover:text-red-500">My Coupons</a>
                            </li>
                            <li>
                                <a href="/" class="hover:text-red-500">Message center</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import UserIcon from '../Icons/UserIcon.vue'
import WishlistIcon from '../Icons/WishlistIcon.vue'
export default {
    components: {
        UserIcon,
        WishlistIcon
    },
    data() {
        return {
            isAccountLinkHovered: false
        }
    }
}
</script>

<style>

</style>