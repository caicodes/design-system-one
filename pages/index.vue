<script setup lang="ts">
import gsap from 'gsap'
import ManifoldPumpSvg from '~/components/octiv/ManifoldPumpSvg.vue'

const setupPage = {
  opacity: 1,
  background: '#1a2430',
  color: 'white',
  padding: '2rem',
  borderRadius: '0rem',
}

const pageRef = ref()
const tl = gsap.timeline()
onMounted(() => {
  tl.set(pageRef.value, { opacity: 0 })
  tl.to(pageRef.value, setupPage)
})
</script>

<!-- eslint-disable vue/html-indent -->
<template>
  <div ref="pageRef" class="page" min-h-screen>
    <div grid grid-cols-2>
      <div v-for="c in 2" :key="c">
        <div grid grid-cols-2>
          <div v-for="j in 2" :key="j" :class="`col-${j}`">
            <div v-for="r in 3" :key="r" class="manifold">
              <!-- manifold -->
              <div v-for="i in 5" :key="i" class="pump" :class="`inner-col-${i}`">
                <!-- add the full manifold slot as an svg that fits the space  -->
                <div w-full>
                  <ManifoldPumpSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pump {

  padding: .25vh 0;

  @apply flex cursor-move text-xs font-100 uppercase border-opacity-25;

  &:hover {
    @apply bg-accent
  }
}

.col-2 .pump svg {
  transform: rotate(-180deg);
}

.col-1 .manifold {
  border-right: solid $french-gray 4px;
}

.col-2 .manifold {
  border-left: solid $french-gray 4px;
}

.manifold {
  @apply my-2
}
</style>
