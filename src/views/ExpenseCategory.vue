<script setup>
import {
  Header,
  Modal,
  Table,
  ExpCategroyTableRow,
  ExpensesCategoryModalForm,
  ExpensesBaseLayout,
  ExpensesTableHeader,
} from "../components/index";

const expensesCategory = [
  {
    id: 1,
    CategoryName: "Food",
    description:
      "Food is available for all employees in the morning and afternoon.",
  },
  {
    id: 2,
    CategoryName: "Rent",
    description: "Office Rent.",
  },
  {
    id: 3,
    CategoryName: "Tax",
    description: "Government Tax.",
  },
  {
    id: 4,
    CategoryName: "Transportation",
    description: "Car and Airplane Transportation.",
  },
  {
    id: 5,
    CategoryName: "Marketing",
    description: "Facebook Ads, Banner Ads, and so on.",
  },
];
const tableColumns = ["categoryName", "description"];
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
      <Header title="Expenses Category" />
    </template>
    <!-- modal -->
    <template v-slot:modal>
      <Modal>
        <!-- form header -->
        <template v-slot:formHeader>
          create
        </template>
        <template v-slot:modalForm>
          <ExpensesCategoryModalForm @formDataSubmitted="handleFormData" />
        </template>
      </Modal>
    </template>
    <template v-slot:table>
      <!-- table -->
      <Table>
        <template v-slot:tableHeader>
          <!-- table header -->
          <ExpensesTableHeader :columnNames="tableColumns" />
        </template>
        <template v-slot:tableBody>
          <!-- table body -->
          <ExpCategroyTableRow :expensesCategory="expensesCategory" />
        </template>
      </Table>
    </template>
  </ExpensesBaseLayout>
</template>
