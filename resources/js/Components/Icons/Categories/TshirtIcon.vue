<template>
    <svg :class="classes" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M20.207 8.53l-2.193-1.405v15.884h-12.024v-15.854l-2.195 1.318-2.426-2.92 4.833-4.553h1.424c.51 1.754 2.018 3.5 4.377 3.5 2.392 0 3.876-1.699 4.381-3.5h1.42l4.826 4.586-2.423 2.944zm-4.858-7.53c-.466 1.322-1.604 2.5-3.346 2.5-1.73 0-2.868-1.178-3.342-2.5h6.688zm2.853-1h-12.396999999999998l-5.805 5.469 3.574 4.303 1.416-.85v15.087h14.024v-15.056l1.402.898 3.577-4.349-5.791-5.502z"/></svg>
</template>

<script>
export default {
    props: {
        classes: {
            type: String,
            default: '',
            required: false
        }
    }
}
</script>