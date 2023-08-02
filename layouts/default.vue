<template>
  <div mx-auto h-screen w-screen bg-base-100>
    <Navbar />
    <main class="px-10 py-20 text-center">
      <slot />
      <Footer />
      <div class="mx-auto mt-5 text-center text-sm opacity-25">
        [Default Layout]
      </div>
    </main>
  </div>
</template>
