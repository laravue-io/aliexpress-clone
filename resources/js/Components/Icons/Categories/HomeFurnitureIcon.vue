<template>
  <svg :class="classes" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 25 25"><title>Sofa Chair</title><path id="Sofa_Chair" data-name="Sofa Chair" d="M25,12.5A3.5,3.5,0,0,0,21.5,9a3.43,3.43,0,0,0-.5.05V4.49A2.58,2.58,0,0,0,18.4,2H6.4A2.42,2.42,0,0,0,4,4.49V9.05A3.45,3.45,0,0,0,3.5,9,3.49,3.49,0,0,0,2,15.65V18.5A2.44,2.44,0,0,0,4,21v2H5V21H20v2h1V20.92a2.56,2.56,0,0,0,2-2.42V15.64A3.49,3.49,0,0,0,25,12.5Zm-20-8A1.42,1.42,0,0,1,6.4,3h12A1.59,1.59,0,0,1,20,4.49V9.35a3.5,3.5,0,0,0-2,3.15V15H7V12.5A3.5,3.5,0,0,0,5,9.35ZM21.48,15H21v1h.48a3.49,3.49,0,0,0,.52-.05V18.5A1.59,1.59,0,0,1,20.4,20H4.4A1.42,1.42,0,0,1,3,18.5V15.95a3.45,3.45,0,0,0,.5.05H4V15H3.5A2.5,2.5,0,1,1,6,12.5v3a.5.5,0,0,0,.5.5h12a.5.5,0,0,0,.5-.5v-3A2.5,2.5,0,1,1,21.48,15Z"/></svg>
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