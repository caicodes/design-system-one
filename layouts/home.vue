<template>
  <div mx-auto min-h-screen w-screen>
    <AppNavbar />
    <main class="px-10 py-20 text-center">
      <slot />
      <AppFooter />
    </main>
  </div>
</template>
