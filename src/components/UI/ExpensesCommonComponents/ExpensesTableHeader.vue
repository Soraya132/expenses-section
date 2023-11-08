<script setup>
defineProps(["columnNames"]);
</script>
<template>
  <tr class="border-b-2 border-dotted">
    <th class="pr-6 py-3" scope="col">
      <div class="w-[22px] h-[22px] rounded-[4px] bg-[#F3F6F9]"></div>
    </th>
    <th
      v-for="(col, index) in columnNames"
      :key="index"
      class="px-6 py-3"
      scope="col"
    >
      {{ col }}
    </th>
    <th class="text-right py-3" scope="col">Actions</th>
  </tr>
</template>
