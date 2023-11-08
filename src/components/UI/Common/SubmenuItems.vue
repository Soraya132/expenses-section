<template>
      <ul class="pl-6 mt-2">
        <RouterLink  v-for="(link,index) in sumbmenuLinks" :key="index"
        :to="`/expense/${link}`"
        >
        <li 
          class="flex items-center gap-2 my-6 cursor-pointer">
          <img :src="props.submenuIcons[index]" alt="submenu icon" class="w-6 h-6 mr-2" />
          <span class="text-[12px] 2xl:text-lg whitespace-nowrap">{{ link }}</span>
        </li>
    </RouterLink>
      </ul>
  </template>
  
  <script setup>
  import { defineProps} from 'vue';
  import { RouterLink } from "vue-router";
  const props = defineProps(["submenuItems", "submenuIcons"]);
  const sumbmenuLinks =["allExpenses","party","ownerPickup","paymentReceived","paymentSent","expensesCategory"]
 
  </script>
  