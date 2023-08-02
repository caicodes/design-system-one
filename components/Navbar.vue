<script setup lang="ts">
</script>

<template>
  <div class="bg-base-300 navbar">
    <OctivNavbarLogo />
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-circle btn-ghost">
          <OctivIndicatorTopRight />
        </label>
        <div tabindex="0" class="dropdown-content z-[1] mt-3 w-52 bg-base-300 shadow card card-compact">
          <div class="card-body">
            <span class="text-lg font-bold">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">
                View cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <NavbarTopRightMenu />
    </div>
  </div>
</template>

<style scoped>
svg {
    @apply mx-auto
}
</style>
