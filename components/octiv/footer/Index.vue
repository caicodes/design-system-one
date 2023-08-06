<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core'

const copyrightYear = useDateFormat(useNow(), 'YYYY')
const currentDateTime = useDateFormat(useNow(), 'dddd MMMM d @ HH:mm:ss')
</script>

<template>
  <footer class="footer">
    <div class="inner flex">
      <div class="copyright hd4k:hover:bg-teal-700">
        &copy; {{ copyrightYear }} octiv design system &middot; all rights reserved
      </div>
      <div hd4k="text-9xl text-pink" lg="text-green" class="datetime hd4k:bg-white bg-black">
        {{ currentDateTime }}
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  @apply bg-base-200 p-10 text-sm text-special text-another-cool-one;

  .inner {

    @apply text-blue justify-between w-full;

    .copyright {
      @apply text-another-cool-one;
    }

    .datetime {
      @apply font-thin;

      &.uhd-datetime {
        @apply color-purple bg-pink
      }
    }
  }

}
</style>
