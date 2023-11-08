<script setup>
import { useTabsStore } from '../../../stores/expenseStore';
const tabsStore = useTabsStore()

</script>
<template>
    <button @click="tabsStore.openModal" class="bg-[#0095E8] w-full sm:w-[120px] h-[40px] rounded-[4px] flex items-center justify-center gap-2">
      <img src="/src/assets/Vector (5).svg" alt="filter icon" />
      <span class="roboto  text-white">Create</span>
    </button>
  </template>
  
 
  
  