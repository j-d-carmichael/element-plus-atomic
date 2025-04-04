import { ref } from 'vue';
import { defineStore } from 'pinia';

interface IGeneralStore {
  counter: number;
}

export const useGeneralStore = defineStore('SubscriptionStore', () => {
  const data = ref<IGeneralStore>({
    counter: 0
  });

  function counterInc () {
    ++data.value.counter;
  }

  return {
    data,
    counterInc
  };
});
