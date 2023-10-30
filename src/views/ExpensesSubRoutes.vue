<script setup>
import { useRoute } from 'vue-router';
import {useTabsStore} from "../stores/expenseStore";
import {
  Header,
  FilterButton,
  CreateButton,
  SearchBar,
  RowNumber,
  Modal,
  Table,
} from "../components/index";
const tabsStore = useTabsStore();

import { ref, computed, onMounted } from 'vue';
import { allExpenses, ownerPickup, paymentSent, paymentReceived, party, expensesCategory } from "../data"

const tableData = {
  allExpenses,
  ownerPickup,
  paymentSent,
  paymentReceived,
  party,
  expensesCategory
};
const route = useRoute();
const routeCategory = ref(null);

function toCamelCase(str) {
  if (!str) {
    return '';
  }
  return str
    .split(' ')
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

const filteredData = computed(() => {
  let category = route.params.category;
  category = toCamelCase(category)
  return tableData[category];
});

const tableColumns = computed(() => {
  const category = toCamelCase(route.params.category);

  if (category === 'allExpenses') {
    return ['date', 'reference', 'addedBy', 'party', 'amount', 'category', 'details'];
  } else if (category === 'ownerPickup') {
    return ['date', 'reference', 'owner', 'amount', 'details'];
  } else if (category === 'paymentSent' || category === 'paymentReceived') {
    return ['date', 'reference', 'addedBy', 'party', 'amount', 'details'];
  } else if (category === 'party') {
    return ['name', 'phone', 'paid', 'spend', 'receivable', 'payable', 'details'];
  } else if (category === 'expensesCategory') {
    return ['CategoryName', 'description'];
  }

  return [];
});

</script>
<template>
  <section class="flex flex-col justify-between h-full pb-12 w-full">
    <div>
      <Header :title = "$route.params.category" />
      <div
        class="flex flex-col w-full sm:flex-row justify-between h-[80px] items-end gap-4 mt-5">
        <SearchBar />
        <div class="flex gap-4 w-full sm:w-auto">
          <FilterButton />
          <CreateButton />
          <Modal :columns="tableColumns" :title = "$route.params.category"/>
        </div>
      </div>
      <div>
        <Table :columns="tableColumns" :filteredData="filteredData" />
      </div>
    </div>
    <div class="mt-10"> <RowNumber /></div>
   
  </section>
</template>
