<script setup>
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

const props = defineProps(['bp'])
const binPump = ref()

gsap.registerPlugin(Draggable)
onMounted(() =>
// loaded a bin pump with sapId
// opt engineType && engineStatus

  Draggable.create(binPump.value, {
    type: 'x,y',
    onDragEnd: () => {
      gsap.to(binPump.value, { x: 0, y: 0 })
    },
  }),
)
</script>

<template>
  <svg ref="binPump" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="BIN_PUMP">
      <rect x="0.5" y="0.5" width="63" height="63" rx="1.5" fill="#01070E" />
      <g id="ENGINE-DIESEL">
        <path
          d="M22 32V19L20 19.0186V32H22ZM37.3398 30.0918H40.7754V26.3672H42.5488V29.4668H44V21.8926H42.5488V24.8779H40.7754V21.3516H37.3438L35.6338 19.2988H32.5V17.4873H35.623V16H27.2227V17.4893H30.5V19.3018H27.3477L24.7324 22.3291H23.0029V28.9893H24.7129L27.3477 31.9893L35.585 31.9971L37.3398 30.0918Z"
          fill="#0075FF" fill-opacity="0.5"
        />
        <path
          d="M22 32V19L20 19.0186V32H22ZM37.3398 30.0918H40.7754V26.3672H42.5488V29.4668H44V21.8926H42.5488V24.8779H40.7754V21.3516H37.3438L35.6338 19.2988H32.5V17.4873H35.623V16H27.2227V17.4893H30.5V19.3018H27.3477L24.7324 22.3291H23.0029V28.9893H24.7129L27.3477 31.9893L35.585 31.9971L37.3398 30.0918Z"
          fill="black" fill-opacity="0.2"
        />
      </g>
      <text id="SAPID" fill="#A7ADB9" font-family="Barlow Condensed" font-size="14" letter-spacing="0em">
        <tspan x="16" y="48">44100{{ props.bp }}</tspan>
      </text>
      <rect x="0.5" y="0.5" width="63" height="63" rx="1.5" stroke="#062345" />
    </g>
  </svg>
</template>

<style lang="scss">
svg {
    user-select: none;
}
</style>
