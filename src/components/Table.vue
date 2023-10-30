<script setup>
import { useTabsStore } from "../stores/expenseStore";
import { formatCamelCaseToWords } from "../data";
const tabsStore = useTabsStore();
defineProps(["columns","filteredData"])
</script>
<template>
  <div class="overflow-x-auto mt-20">
    <table class="w-full text-sm text-left text-gray-500 ">
      <thead class="text-xs text-gray-700 uppercase">
        <tr class="border-b-2 border-dotted">
          <th class="pr-6 py-3" scope="col">
            <div class="w-[22px] h-[22px] rounded-[4px] bg-[#F3F6F9]"></div>
          </th>
          <th
            v-for="(col, index) in columns"
            :key="index"
            class="px-6 py-3"
            scope="col"
          >
          {{ formatCamelCaseToWords(col) }}
          </th>
          <th class="text-right py-3" scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in filteredData"
          :key="item.id"
          class="border-b-2 border-dotted"
        >
          <th
            scope="row"
            class="pr-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            <div class="w-[22px] h-[22px] rounded-[4px] bg-[#F3F6F9]"></div>
          </th>
          <td v-for="(col, index) in columns" :key="index + '1'" class="px-6 py-4">
            {{ item[col] }}
          </td>

          <td class=" pl-6 py-4 text-right flex justify-end gap-2">
            <button
         
              class="bg-red-500 flex items-center justify-center w-[34px] h-[34px] rounded-[4px] "
            >
              <img src="/src/assets/Vector (6).svg" alt="icons" />
            </button>
            <button class="flex w-[34px] h-[34px]"><img src="/src/assets/edit.svg" alt="icons" class="w-ful h-full"/></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


