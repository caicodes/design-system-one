<script setup lang="ts">
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

const pumpsBin = ref()

const setupPage = {
  opacity: 1,
  background: '#1a2430',
  color: 'white',
  padding: '2rem',
  borderRadius: '0rem',
}

const pageRef = ref()
const tl = gsap.timeline()
gsap.registerPlugin(Draggable)

onMounted(() => {
  tl.set(pageRef.value, { opacity: 0 })
  tl.to(pageRef.value, setupPage)
})
</script>

<template>
  <div ref="pageRef" class="page" min-h-screen>
    <div ref="pumpsBin" class="bin">
      <div v-for="bp in 5" :key="bp">
        <OctivManifoldBinPumpSvg :bp="bp" />
      </div>
    </div>
    <div grid grid-cols-2>
      <div v-for="c in 2" :key="c">
        <div grid grid-cols-2>
          <div v-for="j in 2" :key="j" :class="`col-${j}`">
            <div v-for="r in 3" :key="r" class="manifold">
              <!-- manifold -->
              <div v-for="i in 5" :key="i" class="slot" :class="`inner-col-${i}`">
                <!-- add the full manifold slot as an svg that fits the space  -->
                <div w-full>
                  <OctivManifoldPumpSvg />
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
.slot {

  padding: .25vh 0;

  @apply flex cursor-move text-xs font-100 uppercase border-opacity-25;

  // &:hover {
  //   @apply bg-accent
  // }
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

.page {
  opacity: 0;
}

.bin {

  display: flex;
  flex-wrap: wrap;
  text {
    text-anchor: start;
  }

  background-color: $raisin-black;
  padding: 1rem;
  width: 10rem;
}
</style>
