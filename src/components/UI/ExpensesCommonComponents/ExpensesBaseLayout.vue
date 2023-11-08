<script setup>
import {
  Header,
  FilterButton,
  CreateButton,
  SearchBar,
  RowNumber,
  Modal,
  Table,
} from "../../index";
</script>
<template>
  <section class="flex flex-col justify-between h-full pb-12 w-full">
    <div>
      <!-- header of the expenses page -->
      <slot name="header"></slot>
      <div
        class="flex flex-col w-full sm:flex-row justify-between h-[80px] items-end gap-4 mt-5"
      >
        <SearchBar />
        <div class="flex gap-4 w-full sm:w-auto">
          <FilterButton />
          <CreateButton />
           <!-- Modal code will be placed here -->
          <slot name="modal"></slot>
        </div>
      </div>
      <div>
         <!-- Table will be placed here -->
         <slot name="table"></slot>
      </div>
    </div>
    <div class="mt-10"><RowNumber /></div>
  </section>
</template>
