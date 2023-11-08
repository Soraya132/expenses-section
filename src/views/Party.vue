<script setup>
import {
  Header,
  Modal,
  Table,
  ExpensesBaseLayout,
  PartyTableRow,
  PartyModalForm,
  ExpensesTableHeader,
} from "../components/index";
const party = [
  {
    id: 1,
    name: "Visa Partner",
    phone: "0987654321",
    paid: "400 USD",
    spend: "360 USD",
    receivable: "40 USD",
    payable: "0 USD",
    details: "Address is Kabul, Afghanistan.",
  },
  {
    id: 2,
    name: "Sudi Partner",
    phone: "0987654321",
    paid: "1000 AFG",
    spend: "1200 AFG",
    receivable: "0 AFG",
    payable: "200 AFG",
    details: "Visa partner in Saudi Arabia.",
  },
  {
    id: 3,
    name: "Kamair",
    phone: "0987654321",
    paid: "3000 EU",
    spend: "3000 EU",
    receivable: "0 EU",
    payable: "0 EU",
    details: "Flight partner in Saudi Arabia.",
  },
];

const tableColumns = [
  "name",
  "phone",
  "paid",
  "spend",
  "receivable",
  "payable",
  "details",
];
function handleFormData(formData) {
  // Handle the form data received from the child component
  console.log("Form data received in party component:", formData);
  // Perform actions with the form data, e.g., send it to an API
}
</script>
<template>
  <ExpensesBaseLayout>
    <!-- header -->
    <template v-slot:header>
      <Header title="Party" />
    </template>
    <!-- modal -->
    <template v-slot:modal>
      <Modal>
          <!-- form header -->
          <template v-slot:formHeader>
          Create
        </template>

        <template v-slot:modalForm>
          <PartyModalForm @formDataSubmitted="handleFormData"  />
        </template>
      </Modal>
    </template>
    <!-- table -->
    <template v-slot:table>
      <Table>
        <!-- table header -->
        <template v-slot:tableHeader>
          <ExpensesTableHeader :columnNames="tableColumns" />
        </template>
        <template v-slot:tableBody>
          <!-- table body -->
          <PartyTableRow :party="party" />
        </template>
      </Table>
    </template>
  </ExpensesBaseLayout>
</template>
