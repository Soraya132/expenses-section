<script setup>
import { ref, computed, defineProps } from "vue";
import { useTabsStore } from "../stores/expenseStore";
import { formatCamelCaseToWords } from "../data";
const tabsStore = useTabsStore();
const formData = ref({});
const props = defineProps({
  columns: Array,
  pageType: String,
});
function submitForm() {
  // Clear form data after submission
  console.log(formData.value)
  formData.value = {};
}

const columnsToDisplay = computed(() => {
  switch (props.pageType) {
    case "All Expenses":
      return [
        { name: "date", required: true, label: "Date" },
        { name: "category", required: true, label: "Expenses Category" },
        { name: "party", required: true, label: "Party" },
        { name: "amount", required: true, label: "Amount" },
        { name: "details", required: false, label: "Details" },
        
      ];
    case "Expenses Category":
      return [
        { name: "categoryName", required: true, label: "Category Name" },
        { name: "description", required: false, label: "Description" }
      ];
    case "Owner Pickup":
      return [
        { name: "date", required: true, label: "Date" },
        { name: "owner", required: true, label: "Owner" },
        { name: "amount", required: true, label: "Amount" },
        { name: "details", required: false, label: "Details" }
      ];
    case "Payment Sent":
    case "Payment Received":
      return [
        { name: "date", required: true, label: "Date" },
        { name: "party", required: true, label: "Party" },
        { name: "amount", required: true, label: "Amount" },
        { name: "details", required: false, label: "Details" }
      ];
    case "Party":
      return [
        { name: "name", required: true, label: "Name" },
        { name: "phone", required: true, label: "Phone" },
        { name: "details", required: false, label: "Details" }
      ];
    default:
      return [];
  }
});

</script>
<template>
  <form @submit.prevent="submitForm" class="px-3 pt-6 md:px-8 lg:px-14">
    <div v-for="(col, index) in columnsToDisplay" :key="index" class="mb-4">
      <label :for="col.name" class="capitalize text-sm">{{ col.label}}<span v-if="col.required" class="text-red-700 ml-1">*</span></label>
      <template v-if="col.name === 'details' || col.name === 'description'">
        <textarea
          v-model="formData[col.name]"
          :id="col"
          :required="col.required"
          class="bg-[#F3F6F9] rounded-[4px] text-black w-full focus:outline-none py-3 mt-3 mb-4 form-font resize-none  px-2"
        >
A Few Words...</textarea
        >
      </template>
      <template v-else-if="col === 'date'">
        <input
          v-model="formData[col.name]"
          :required="col.required"
          :id="col"
          type="date"
          class="bg-[#F3F6F9] rounded-[4px] w-full focus:outline-none py-3 mt-3 mb-4 form-font px-2"
        />
      </template>
      <template
        v-else-if="col === 'category' || col === 'party' || col === 'owner'"
      >
        <select
          v-model="formData[col.name]"
          :id="col"
          :required="col.required"
          class="bg-[#F3F6F9] rounded-[4px] w-full focus:outline-none py-3 mt-3 mb-4 form-font px-2"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </template>
      <template v-else>
        <input
          v-model="formData[col.name]"
          :id="col"
          type="text"
          class="bg-[#F3F6F9] rounded-[4px] w-full focus:outline-none py-3 mt-3 mb-4 form-font px-2"
        />
      </template>
    </div>
    <button
      type="submit"
      class="bg-[#0095E8] rounded-[4px] text-white px-5 mt-2 py-1"
    >
      Submit
    </button>
  </form>
</template>
