<script setup lang="ts">
const yo = ref('yo, this u sets')
</script>

<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="avatar btn btn-circle btn-ghost">
      <div class="w-10 rounded-full">
        <img src="/imgs/abstract-particles-bg.jpeg" alt="">
      </div>
    </label>
    <ul tabindex="0" class="dropdown-content z-[1] mt-3 w-52 bg-base-100 p-2 shadow menu rounded-box menu-sm">
      <li>
        <a class="justify-between">
          Profile {{ yo }}
          <span class="badge">New</span>
        </a>
      </li>
      <li><a> {{ yo }}</a></li>
      <li><a>Logout</a></li>
    </ul>
  </div>
</template>

<style scoped>

</style>
