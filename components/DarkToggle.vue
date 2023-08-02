<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    // content: () => color.value === 'dark' ? '#222222' : '#ffffff',
  }],
})

// function toggleDark() {
//   color.preference = color.value === 'dark' ? 'light' : 'dark'
// }
</script>

<template>
  <button class="!outline-none" @click="toggleDark()">
    <div class="i-carbon-sun dark:i-carbon-moon" />
  </button>
</template>
