<template>
      <ul class="pl-6 mt-2">
        <RouterLink  v-for="(submenuItem,index) in props.submenuItems" :key="index"
        :to="{name:'expenses',params:{category:submenuItem}}"
        >
        <li 
          class="flex items-center gap-2 my-6 cursor-pointer">
          <img :src="props.submenuIcons[index]" alt="submenu icon" class="w-6 h-6 mr-2" />
          <span class="text-[12px] 2xl:text-lg whitespace-nowrap">{{ submenuItem }}</span>
        </li>
    </RouterLink>
      </ul>
  </template>
  
  <script setup>
  import { defineProps} from 'vue';
  import { RouterLink } from "vue-router";
  const props = defineProps(["submenuItems", "submenuIcons"]);
 
  </script>
  