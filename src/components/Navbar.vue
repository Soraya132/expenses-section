<script setup>
import { useTabsStore } from "../stores/expenseStore";
import { menuItems, leftIcons, rightIcons } from "../data";
const tabsStore = useTabsStore();
</script>
<template>
  <div>
    <nav
      class="flex justify-between items-center shadow h-[80px] px-1 md:px-[30px]"
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
    <div
      class="absolute shadow-md bg-white bottom-[0px] top-[84px] left-0 lg:left-[114px] transition-all duration-1000 ease-in-out overflow-hidden"
      :class="{
        'w-0 ': !tabsStore.getIsMenuOpen,
        'w-[300px] ': tabsStore.getIsMenuOpen,
      }"
    >
      <ul class="pl-6 mt-7">
        <li
          v-for="(menuItem, index) in menuItems"
          :key="index"
          class="flex items-center gap-2 my-6 cursor-pointer"
          @click="tabsStore.setSelectedTab(menuItem.clickFunction)"
        >
          <img :src="menuItem.iconSrc" alt="icon" class="w-6 h-6 mr-2" /><span
            class="menu-item text-[12px] 2xl:text-xl whitespace-nowrap"
            >{{ menuItem.name }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.shadow {
  box-shadow: 0px 1px 3px 2px #0000001a;
}
</style>
