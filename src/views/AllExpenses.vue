<script setup>
import {
  Header,
  Modal,
  Table,
  AllExpensesTableRow,
  AllExpensesModalForm,
  ExpensesBaseLayout,
  ExpensesTableHeader,
} from "../components/index";
const allExpenses = [
  {
    id: 1,
    date: "2023-10-05",
    reference: "EXP_1117",
    addedBy: "Mohammad Jan Naser",
    party: "Ahmad",
    amount: "500 USD",
    category: "Food",
    details:
      "Food is available for all employees in the morning and afternoon.",
  },
  {
    id: 2,
    date: "2023-10-03",
    reference: "EXP_1117",
    addedBy: "Sami Sroush",
    party: "Kam air",
    amount: "1000 AFG",
    category: "Rent",
    details: "Office Rent",
  },
  {
    id: 3,
    date: "2023-10-03",
    reference: "EXP_1117",
    addedBy: "Mohammad Jan Naser",
    party: "Saudi Arabia",
    amount: "44500 AFG",
    category: "Tax",
    details: "Government Tax",
  },
  {
    id: 4,
    date: "2023-10-03",
    reference: "EXP_1117",
    addedBy: "Khalid Attayee",
    party: "Visa partner",
    amount: "200 USD",
    category: "Car",
    details: "Car and Airplane Transportation",
  },
  {
    id: 5,
    date: "2023-10-03",
    reference: "EXP_1117",
    addedBy: "Mohammad Jan Naser",
    party: "Ticket partner",
    amount: "300 AE",
    category: "Ads",
    details: "Facebook Ads, Banner Ads, and so on.",
  },
];
const allExpensesColumns = [
  "date",
  "reference",
  "addedBy",
  "party",
  "amount",
  "category",
  "details",
];
function handleFormData(formData) {
  // Handle the form data received from the child component
  console.log("Form data received in allExpenses component:", formData);
  // Perform actions with the form data, e.g., send it to an API
}
</script>
<template>
  <ExpensesBaseLayout>
    <!-- header -->
    <template v-slot:header>
      <Header title="All Expenses" />
    </template>
    <!-- modal -->
    <template v-slot:modal>
      <Modal>
        <!-- form header -->
        <template v-slot:formHeader>
          create
        </template>
        <template v-slot:modalForm>
          <AllExpensesModalForm @formDataSubmitted="handleFormData" />
        </template>
      </Modal>
    </template>
    <!-- table -->
    <template v-slot:table>
      <Table>
        <template v-slot:tableHeader>
          <!-- table header -->
          <ExpensesTableHeader :columnNames="allExpensesColumns" />
        </template>
        <template v-slot:tableBody>
          <!-- table body -->
          <AllExpensesTableRow :allExpenses="allExpenses" />
        </template>
      </Table>
    </template>
  </ExpensesBaseLayout>
</template>
