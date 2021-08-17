<template>
    <div class="flex items-center ml-8">
        <CartIcon class="relative h-8 w-8"/>
        <span class="absolute bg-red-500 text-white text-sm rounded-full px-1 top-14 right-112">
            0
        </span>
    </div>
</template>

<script>
import CartIcon from '../Icons/CartIcon'
export default {
    components: {
        CartIcon
    }
}
</script>