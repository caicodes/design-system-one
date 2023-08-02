import { acceptHMRUpdate, defineStore } from 'pinia';

/**
 *  🍍 Pinia store:
 *      ACE/EquipmentState/Outstream/pumps
 */

interface EquipmentStateOutstreamPump {
  sapId: number | string;
}

export const usePumpsStore = defineStore('pumps', {
  state: () => {
    return {
      pumps: [] as EquipmentStateOutstreamPump[],
    };
  },
});

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(usePumpsStore as any, import.meta.hot));

