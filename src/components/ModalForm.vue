
<script setup>
import { ref, reactive, computed } from "vue";
import { formatCamelCaseToWords ,isDateType,isSelectField,isTextareaField} from "../data";
import { useTabsStore } from "../stores/expenseStore";
const tabsStore = useTabsStore();
const formData = reactive({});
function saveFormData() {
  // Create a new object with reactive properties
  const newEntry = ref({});
  // Assign values from formData to the reactive newEntry object
  for (const column of tabsStore.Columns) {
    // Skip the 'id' column
    if (column !== "id") {
      newEntry.value[column] = formData[column];
    }
  }
  // Generate a random id using timestamp and a random number
  newEntry.value.id = Date.now() + Math.floor(Math.random() * 1000);

  // Add the new object to the appropriate data array based on the selected tab
  const selectedTab = tabsStore.selectedTab;

  tabsStore.tabsData[selectedTab].push(newEntry.value);
  tabsStore.isModalVisible = false;
}

const formFields = computed(() => {
  const categoryColumns = {
    expencesCategory: ["CategoryName", "description"],
    allExpences: ["date", "category", "party", "amount", "details"],
    ownerPickup: ["date", "owner", "amount", "details"],
    paymentSent: ["date", "party", "amount", "details"],
    paymentReceived: ["date", "party", "amount", "details"],
    party: ["name", "phone", "details"],
  };
  const fields = tabsStore.Columns.map((column) => {
    const isRequiredField = [
      "category",
      "party",
      "owner",
      "name",
      "phone",
      "date",
      "amount","CategoryName",
    ].includes(column);
    formData[column] = isRequiredField ? "" : null; // Set required fields to empty string, others to null

    return {
      name: column,
      required: isRequiredField,
    };
  }).filter((field) =>
    categoryColumns[tabsStore.selectedTab]?.includes(field.name)
  );

  return fields;
});
</script>
<template>
  <form @submit.prevent="saveFormData" class="px-3 pt-6 md:px-8 lg:px-14">
    <div v-for="field in formFields" :key="field.name">
      <label class="block roboto text-[12px] capitalize"
        > {{ formatCamelCaseToWords(field.name) }}<span v-if="field.required" class="pl-1 text-red-700">*</span></label
      >
      <textarea
        v-if="isTextareaField(field.name)"
        v-model="formData[field.name]"
        class="bg-[#F3F6F9] rounded-[4px] text-black w-full focus:outline-none py-3 mt-3 mb-4 form-font resize-none px-2"
        
      >A Few Words ...</textarea>
      <select
        v-else-if="isSelectField(field.name)"
        v-model="formData[field.name]"
        class="bg-[#F3F6F9] rounded-[4px] w-full focus:outline-none py-3 mt-3 mb-4 form-font px-2"
        :required="field.required"
      >
      <option value="field.name" disabled>{{ field.name }}</option>
        <!-- options here -->
        <option :value="field.name">{{ field.name }}</option>
      </select>
      <input
        v-else-if="isDateType(field.name)"
        type="date"
        v-model="formData[field.name]"
        class="bg-[#F3F6F9] rounded-[4px] w-full focus:outline-none py-3 mt-3 mb-4 form-font px-2"
        :required="field.required"
      />
      <input
        v-else
        type="text"
        v-model="formData[field.name]"
        class="bg-[#F3F6F9] rounded-[4px] w-full focus:outline-none py-3 mt-3 mb-4 form-font px-2"
        :required="field.required"
      />
    </div>
    <button
      type="submit"
      class="bg-[#0095E8] rounded-[4px] text-white px-5 mt-2 py-1"
    >
      Submit
    </button>
  </form>
</template>
