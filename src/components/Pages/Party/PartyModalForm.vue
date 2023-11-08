<script setup>
import { reactive } from "vue";

const formData =reactive({
  name: "",
  phone:"",
  details: "",
});
const emit = defineEmits(['formDataSubmitted']); // Define a custom event

function submitForm() {
  // Access form data using formData object
  const data = {
    name: formData.name,
    phone:formData.phone,
    details: formData.details,
  };

  // Perform form submission logic here, for example, send the data to an API
  emit('formDataSubmitted', data);

  // Clear form fields after submission
  formData.name = "";
  formData.phone ="",
  formData.details = "A Few Words";
}
</script>
<template>
  <form @submit.prevent="submitForm" class="px-3 pt-6 md:px-8 lg:px-14">
    <div>
      <label for="name" class="capitalize text-sm"
        >name <span class="text-red-700 ml-1">*</span></label
      >
      <input
      v-model="formData.name"
        type="text"
        class="bg-[#F3F6F9] rounded-[4px] w-full focus:outline-none py-3 mt-3 mb-4 form-font px-2"
      />
    </div>
    <div>
      <label for="phone" class="capitalize text-sm"
        >phone <span class="text-red-700 ml-1">*</span></label
      >
      <input
      v-model="formData.phone"
        type="text"
        class="bg-[#F3F6F9] rounded-[4px] w-full focus:outline-none py-3 mt-3 mb-4 form-font px-2"
      />
    </div>
    <div>
      <label for="details" class="capitalize text-sm"
        >details</label
      >
      <textarea
      v-model="formData.details"
        class="bg-[#F3F6F9] rounded-[4px] text-black w-full focus:outline-none py-3 mt-3 mb-4 form-font resize-none px-2"
      >
A Few Words </textarea
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
