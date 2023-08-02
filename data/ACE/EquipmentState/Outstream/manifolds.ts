import { acceptHMRUpdate, defineStore } from 'pinia';

/**
 *  🍍 Pinia store:
 *      ACE/EquipmentState/Outstream/manifolds
 *
 *      "msg_name": "ACE_API_Message.EquipmentStateOutstream",
 *      "topic": "Hal/ACE/EquipmentState/Outstream",
 */

export const useManifoldsStore = defineStore('manifolds', {
  state: () => {
    return {
      manifolds: [] as EquipmentStateOutstreamManifold[],
    };
  },
});

interface EquipmentStateOutstreamManifold {
  id: number;
  position: EquipmentStateOutstreamManifoldPosition;
  slotCount: number;
}

export type EquipmentStateOutstreamManifoldPosition = {
  padColumn: number;
  padRow: number;
};

export type ManifoldSlot = {
  side: string;
  distance: number;
  position: PumpPositionInManifold;
};

export type PumpPositionInManifold = {
  status: boolean;
};

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useManifoldsStore as any, import.meta.hot));

