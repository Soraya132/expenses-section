<script setup>
import { useTabsStore } from "../stores/expenseStore";
import { menuItems, leftIcons, rightIcons } from "../data";
const tabsStore = useTabsStore();
</script>
<template>
  <div>
    <nav
      class="flex justify-between items-center shadow h-[80px] px-1 md:px-[30px] fixed z-10 w-full bg-white"
    >
      <!-- Left Section (Logo, Menu Icon) -->
      <ul class="flex items-center space-x-4">
        <li
          v-for="(icon, index) in leftIcons"
          :key="index"
          class="cursor-pointer"
        >
          <img
            :src="icon.iconLink"
            :alt="icon.name"
            :class="`w-[${icon.width}] h-[${icon.height}]`"
            @click="tabsStore.toggleMenu(icon.name)"
          />
        </li>
      </ul>
      <!-- Right Section (Avatar, Notification Icon, Internet Icon)  -->
      <ul class="flex items-center space-x-4">
        <li v-for="(icon, index) in rightIcons" :key="index">
          <img
            :src="icon.iconLink"
            :alt="icon.name"
            :class="`h-${icon.height} w-${icon.width}`"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
.shadow {
  box-shadow: 0px 1px 3px 2px #0000001a;
}
</style>
