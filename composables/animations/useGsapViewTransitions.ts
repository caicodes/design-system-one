import gsap from 'gsap';

export function useGsapViewTransitions() {
  /**
   * This Composable is used for transitions between views in panels
   * for use with vue's <Transition> / <TransitionGroup>
   * Settings and class names for using gsap
   * with Vue's native transitions components...
   * @returns variety of methods and options/scenes/animations/etc..
   */

  function getPageViewTransitionsSettings(el: HTMLDListElement | any, done: any) {
    function onBeforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    }
    function onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: '1.6em',
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    }
    function onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    }

    // getPageTransitionsSettings returns the following
    // for use as props in vue's <TransitionGroup />
    return {
      onBeforeEnter,
      onEnter,
      onLeave,
    };
  }

  /*

    // TODO: Use in DesignSystem as wrapper...
    // options -  can be imported/shared or custom... 
    const useOptions = {
      onBeforeEnter,
      onEnter,
      onLeave,
    };
    
    // pass options to wrapper as props...

    <AppTransitionGroup :options="useOptions">
      <--wrap list element to animate transitions-->
    </AppTransitionGroup>

    // or to native vue transitions components...
    // default use...
      
      <TransitionGroup
        tag="ul" // get from options target
        :css="false" // to swap to gsap, not css...
        @before-enter="onBeforeEnter" // << here
        @enter="onEnter" // << here
        @leave="onLeave" // << here
      >
        <li
          v-for="(item, index) in computedList"
          :key="item.msg"
          :data-index="index"
        >
          {{ item.msg }}
        </li>
      </TransitionGroup>
      
      */

  /**
   * panelSwap(Out, In)
   * pass in two tpl refs for setup and nested view
   * transition animation...
   * @param panelOut:HTMLDivElement
   * @param panelIn:HTMLDivElement
   */
  const panelSwap = (panelOut: HTMLDivElement, panelIn: HTMLDivElement) => {
    const tl = gsap.timeline();
    tl.to(panelOut, { opacity: 0 }).to(panelIn, { opacity: 1 });
  };

  return {
    panelSwap,

    getPageViewTransitionsSettings,
  };
}

/**
 * NOTE:
 * see examples from vue's docs
 * @see https://vuejs.org/guide/built-ins/transition-group.html#staggering-list-transitions
 */

