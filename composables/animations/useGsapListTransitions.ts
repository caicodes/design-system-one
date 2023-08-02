import gsap from 'gsap';
import type { GsapListAnimationOptions } from '@/types/GsapAnimationTypes';
export function useGsapListTransitions() {
  /**
   * simple list transitions given a target el and optional opts
   * @param targetEl required
   * @param options object: GsapAnimationOptions
   */
  function listFadeInAndDown(targetEl: HTMLElement, options?: GsapListAnimationOptions) {
    // init timeline instance and options/defaults
    const tL = gsap.timeline();
    // set a default if no options are passed,
    // TODO: future upgrade > add a variety and create params to select
    // TODO: future upgrade > select from registered 'fX' ("effects")
    if (!options)
      options = {
        opacity: 1,
        stagger: 0.05,
        duration: 0.3,
        ease: 'power4.inOut',
      };

    // gsap.set() to prep/reset for timeline...
    tL.set(targetEl, { opacity: 0, x: 0, y: -20 });
    // items are now at originX and y -20 zero opacity
    // (ready to fade in and down) (could also use fromTo...)

    // begin timeline animation...
    tL.to(targetEl, options);
  }

  return {
    listFadeInAndDown,
  };
}

