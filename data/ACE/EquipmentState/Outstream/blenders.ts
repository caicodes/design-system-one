import { acceptHMRUpdate, defineStore } from 'pinia';

/**
 *  🍍 Pinia store:
 *      ACE/EquipmentState/Outstream/blenders
 *
 *     "msg_name": "ACE_API_Message.EquipmentStateOutstream",
 *     "topic": "Hal/ACE/EquipmentState/Outstream",
 */

// temp placeholder only...
// import type { EquipmentStateOutstreamBlender } from...
type EquipmentStateOutstreamBlender = {
  blenderType: string;
};

// types for all mqtt msgs related to this also should be typed...

// this is literally the only "state" item required here... a collection of type Blender.
export const useBlendersStore = defineStore('blendersStore', {
  state: () => {
    return {
      blenders: [] as EquipmentStateOutstreamBlender[],
    };
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useBlendersStore as any, import.meta.hot));

