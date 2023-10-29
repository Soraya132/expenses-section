<script setup>
import {onMounted } from "vue";
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
onMounted(() => {
  tabsStore.initializeColumns(); // Initialize columns when the component is created
});
</script>
<template>
  <section class="flex flex-col justify-between h-full pb-12 w-full">
    <div>
      <Header />
      <div
        class="flex flex-col w-full sm:flex-row justify-between h-[80px] items-end gap-4 mt-5"
      >
        <SearchBar />
        <div class="flex gap-4 w-full sm:w-auto">
          <FilterButton />
          <CreateButton />
          <Modal />
        </div>
      </div>
      <div>
        <Table />
      </div>
    </div>
    <RowNumber />
  </section>
</template>
