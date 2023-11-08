<script setup>
import {
  Header,
  Modal,
  Table,
  OwnerPickupTableRow,
  ExpensesBaseLayout,
  OwnerPickupModalForm,
  ExpensesTableHeader
} from "../components/index";
const ownerPickup = [
  {
    id: 1,
    date: "2023-10-05",
    reference: "EXP_1117",
    owner: "Sayeed",
    amount: "500 USD",
    details:
      "Food is available for all employees in the morning and afternoon.",
  },
  {
    id: 2,
    date: "2023-10-03",
    reference: "EXP_1117",
    owner: "Sayeed",
    amount: "1000 AFG",
    details: "Office Rent",
  },
  {
    id: 3,
    date: "2023-10-03",
    reference: "EXP_1117",
    owner: "Sayeed",
    amount: "44500 AFG",
    details: "Government Tax",
  },
  {
    id: 4,
    date: "2023-10-03",
    reference: "EXP_1117",
    owner: "Sabir",
    amount: "200 USD",
    details: "Car and Airplane Transportation",
  },
  {
    id: 5,
    date: "2023-10-03",
    reference: "EXP_1117",
    owner: "Sabir",
    amount: "300 AE",
    details: "Facebook Ads, Banner Ads, and so on.",
  },
];
const tableColumns = ["date", "reference", "owner", "amount", "details"];
function handleFormData(formData) {
  // Handle the form data received from the child component
  console.log("Form data received in owner pickup component:", formData);
  // Perform actions with the form data, e.g., send it to an API
}
</script>
<template>
  <ExpensesBaseLayout>
    <!-- header -->
    <template v-slot:header>
      <Header title="Owner Pickup" />
    </template>
    <!-- modal -->
    <template v-slot:modal>
      <Modal>
          <!-- form header -->
          <template v-slot:formHeader>
          Create
        </template>

        <template v-slot:modalForm>
          <OwnerPickupModalForm @formDataSubmitted="handleFormData"   />
        </template>
      </Modal>
    </template>
    <!-- table -->
    <template v-slot:table>
      <Table>
        <template v-slot:tableHeader>
          <!-- table header -->
          <ExpensesTableHeader :columnNames="tableColumns" />
        </template>
        <template v-slot:tableBody>
          <!-- table body -->
          <OwnerPickupTableRow :ownerPickup="ownerPickup" />
        </template>
      </Table>
    </template>
  </ExpensesBaseLayout>
</template>
