<template>
  <div
    class="lg:max-w-[52.5rem] max-w-[38rem] w-full bg-white lg:p-8 sm:p-10 pb-11 mx-auto sm:rounded-[2rem] flex lg:gap-16 gap-10 flex-col lg:flex-row"
  >
    <text-box class="order-2 lg:order-none"></text-box>
    <img-box class="order-1 lg:order-none"></img-box>
  </div>
</template>

<script setup>
import TextBox from './TextBox.vue'
import ImgBox from './ImgBox.vue'
</script>
