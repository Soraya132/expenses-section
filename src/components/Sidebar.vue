<script setup>
import { imageObjects } from "../data";
import { useTabsStore } from "../stores/expenseStore";
import { RouterLink } from "vue-router";
import SubmenuItems from "./SubmenuItems.vue";
const tabsStore = useTabsStore();
</script>
<template>
  <aside
    class="shadow-lg overflow-hidden bg-white mt-24 h-full transition-all duration-500"
    :class="{
      'w-0': !tabsStore.getIsMenuOpen,
      'w-[120px]': tabsStore.getIsMenuOpen,
    }"
  >
    <nav>
      <ul class="flex flex-col">
        <router-link to="/">
          <li
            class="h-[80px] px-7 flex flex-col menu-item items-center justify-center border-b border-b-gray-300"
          >
            <img
              src="/src/assets/house.svg"
              alt="Dashboard"
              class="w-[24px] h-[24px]"
            />
            <span class="text-[12px] mt-2">Dashboard</span>
          </li>
        </router-link>
     
          <li  v-for="(item, index) in imageObjects.slice(1)" :key="index"
            class="h-[80px] px-7 flex items-center justify-center "
            :class="{
              'border-b border-b-gray-300': index !== imageObjects.length - 1,
            }"
            @click="
              item.name === 'Expenses' ? tabsStore.showSubMenuList() : null
            "
          >
            <div
              class="menu-item cursor-pointer flex flex-col justify-center items-center whitespace-nowrap"
            >
              <img :src="item.src" alt="icon" class="w-[24px] h-[24px]" />
              <span class="text-[12px] mt-2">{{ item.name }}</span>
            </div>
            <template v-if="item.name === 'Expenses'">
            <div
              class="absolute shadow-md bottom-0 top-[85px] left-[117px] overflow-hidden bg-white transition-all duration-1000 ease-in-out"
              :class="{
                'w-0': !tabsStore.isSubMenuOpen,
                'w-[230px]': tabsStore.isSubMenuOpen,
              }"
            >
              <SubmenuItems
                :submenuItems="item.submenu"
                :submenuIcons="item.submenuIcons"
              />
            </div>
          </template>
          </li>
      </ul>
    </nav>
  </aside>
</template>

<!-- :class="{
  'w-0': !tabsStore.isSubMenuOpen,
'w-[500px]': tabsStore.isSubMenuOpen,
}" -->
