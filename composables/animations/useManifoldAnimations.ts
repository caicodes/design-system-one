/**
 * @function useManifoldAnimations()
 * @returns animateTo obj w/ properties of elements
 * as objects to pass to gsap to animation to and from...
 */
export function useManifoldAnimations() {
  const manifoldBin = {
    background: '#102430',
    borderRadius: '.25rem',
  }

  // LINE_REAR_CONNECTION
  const lineRearDisconnect = {
    stroke: 'transparent',
    scaleX: 0,

  }

  const hidePumpInfo = {
    opacity: 0,
  }
  const showPumpInfo = {
    opacity: 1,
  }

  const manifoldPump = {
    opacity: 1,
    background: '#102430',
    borderRadius: '.25rem',
  }

  const sapIdToPumpInSlot = {
    x: 17,
    y: 32.5,
  }

  const sapIdToPumpInBin = {
    x: 150,
  }

  const pumpSvgStartPosition = {
    x: 0,
    y: 0,
  }

  const animateTo = {
    bin: manifoldBin,
    pump: manifoldPump,
    sapIdPump: sapIdToPumpInSlot,
    sapIdBin: sapIdToPumpInBin,
    lineRearDisconnect,
    hidePumpInfo,
    showPumpInfo,
    pumpSvgStartPosition,
  }

  return {
    animateTo,
  }
}
