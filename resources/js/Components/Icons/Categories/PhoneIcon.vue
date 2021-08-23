<template>
  <svg :class="classes" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 102.009 102.009" xml:space="preserve">
        <g>
            <path d="M70.94,8.487H30.819c-2.954,0-5.357,2.403-5.357,5.357v74.07c0,2.954,2.403,5.357,5.357,5.357H70.94   c2.954,0,5.357-2.403,5.357-5.357v-74.07C76.297,10.89,73.894,8.487,70.94,8.487z M73.297,87.915c0,1.3-1.058,2.357-2.357,2.357   H30.819c-1.3,0-2.357-1.058-2.357-2.357v-74.07c0-1.3,1.058-2.357,2.357-2.357H70.94c1.3,0,2.357,1.058,2.357,2.357V87.915z"/>
            <circle cx="50.879" cy="81.742" r="1.929"/>
        </g>
    </svg>
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