<script setup>
import Pagination from './Pagination.vue';
import { useTabsStore } from '../stores/expenseStore';

const tabsStore = useTabsStore();
</script>

<template>
    <div class="flex flex-col sm:flex-row gap-4 justify-between mt-6 lg:mt-0">
      <div class="flex items-center space-x-2">
        <span>Rows per page:</span>
        <select v-model="tabsStore.selectedRowsPerPage" class="focus:outline-none">
          <option value="1">1 rows</option>
          <option value="4">4 rows</option>
          <option value="10">10 rows</option>
        </select>
      </div>
      <Pagination />
    </div>
  </template>
  

  