<script setup>
defineProps(["party"]);
</script>

<template>
  <tr v-for="item in party" :key="item.id" class="border-b-2 border-dotted">
    <th
      scope="row"
      class="pr-6 py-4 font-medium text-gray-900 whitespace-nowrap"
    >
      <div class="w-[22px] h-[22px] rounded-[4px] bg-[#F3F6F9]"></div>
    </th>
    <td class="px-6 py-4">
      {{ item.name }}
    </td>
    <td class="px-6 py-4">
      {{ item.phone }}
    </td>
    <td class="px-6 py-4">
      {{ item.paid }}
    </td>
    <td class="px-6 py-4">
      {{ item.spend }}
    </td>
    <td class="px-6 py-4">
      {{ item.receivable }}
    </td>
    <td class="px-6 py-4">
      {{ item.payable }}
    </td>
    <td class="px-6 py-4">
      {{ item.details }}
    </td>

    <td class="pl-6 py-4 text-right flex justify-end gap-2">
      <button
        class="bg-red-500 flex items-center justify-center w-[34px] h-[34px] rounded-[4px]"
      >
        <img src="/src/assets/Vector (6).svg" alt="icons" />
      </button>
      <button class="flex w-[34px] h-[34px]">
        <img src="/src/assets/edit.svg" alt="icons" class="w-ful h-full" />
      </button>
    </td>
  </tr>
</template>
