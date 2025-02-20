<template>
  <div>
    <img :src="imageSrc" alt="" class="sm:rounded-2xl w-full" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

import desktopImage from '@/assets/images/illustration-sign-up-desktop.svg'
import mobileImage from '@/assets/images/illustration-sign-up-mobile.svg'

const { width } = useWindowSize()

// 根據螢幕寬度切換圖片
const imageSrc = computed(() => {
  return width.value > 992 ? desktopImage : mobileImage
})
</script>
