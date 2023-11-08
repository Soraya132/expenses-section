<script setup>
import { reactive } from "vue";

const formData = reactive({
  date: "",
  category: "",
  party: "",
  amount: "",
  details: "",
});
const emit = defineEmits(["formDataSubmitted"]); // Define a custom event

function submitForm() {
  // Access form data using formData object
  const data = {
    date: formData.date,
    category: formData.category,
    party: formData.party,
    amount: formData.amount,
    details: formData.details,
  };

  // Perform form submission logic here, for example, send the data to an API
  emit("formDataSubmitted", data);

  // Clear form fields after submission
  formData.date = "";
  (formData.category = ""), (formData.party = "");
  formData.amount = "";
  formData.details = "A Few Words";
}
</script>
<template>
  <form @submit.prevent="submitForm" class="px-3 pt-6 md:px-8 lg:px-14">
    <div>
      <label for="date" class="capitalize text-sm"
        >Date <span class="text-red-700 ml-1">*</span></label
      >
      <input
        type="date"
        v-model="formData.date"
        class="bg-[#F3F6F9] rounded-[4px] w-full focus:outline-none py-3 mt-3 mb-4 form-font px-2"
      />
    </div>
    <div>
      <label for="category" class="capitalize text-sm"
        >Expenses Category<span class="text-red-700 ml-1">*</span></label
      >
      <select
        v-model="formData.category"
        class="bg-[#F3F6F9] rounded-[4px] w-full focus:outline-none py-3 mt-3 mb-4 form-font px-2"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>
    <div>
      <label for="party" class="capitalize text-sm"
        >Party <span class="text-red-700 ml-1">*</span></label
      >
      <select
        v-model="formData.party"
        class="bg-[#F3F6F9] rounded-[4px] w-full focus:outline-none py-3 mt-3 mb-4 form-font px-2"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>
    <div>
      <label for="amount" class="capitalize text-sm"
        >Amount<span class="text-red-700 ml-1">*</span></label
      >
      <input
        type="text"
        v-model="formData.amount"
        class="bg-[#F3F6F9] rounded-[4px] w-full focus:outline-none py-3 mt-3 mb-4 form-font px-2"
      />
    </div>
    <div>
      <label for="details" class="capitalize text-sm">details</label>
      <textarea
        v-model="formData.details"
        class="bg-[#F3F6F9] rounded-[4px] text-black w-full focus:outline-none py-3 mt-3 mb-4 form-font resize-none px-2"
      >
A Few Words</textarea
      >
    </div>
    <button
      type="submit"
      class="bg-[#0095E8] rounded-[4px] text-white px-5 mt-2 py-1"
    >
      Submit
    </button>
  </form>
</template>

<script setup></script>
