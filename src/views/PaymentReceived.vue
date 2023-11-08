<script setup>
import {
  Header,
  Modal,
  Table,
  PaymentReceivedTableRow,
  ExpensesBaseLayout,
  PaymentReceivedModalForm,
  ExpensesTableHeader,
} from "../components/index";

const paymentReceived = [
  {
    id: 1,
    date: "2023-10-05",
    reference: "EXP_1117",
    addedBy: "Mohammad Jan Naser",
    party: "Ahmad",
    amount: "500 USD",
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
    details: "Office Rent",
  },
  {
    id: 3,
    date: "2023-10-03",
    reference: "EXP_1117",
    addedBy: "Mohammad Jan Naser",
    party: "Sudi Arabia",
    amount: "44500 AFG",
    details: "Government Tax",
  },
  {
    id: 4,
    date: "2023-10-03",
    reference: "EXP_1117",
    addedBy: "Khalid Attayee",
    party: "Visa partner",
    amount: "200 USD",
    details: "Car and Airplane Transportation",
  },
  {
    id: 5,
    date: "2023-10-03",
    reference: "EXP_1117",
    addedBy: "Mohammad Jan Naser",
    party: "Ticket partner",
    amount: "300 AE",
    details: "Facebook Ads, Banner Ads, and so on.",
  },
];
const paymentReceivedColumns = [
  "date",
  "reference",
  "addedBy",
  "party",
  "amount",
  "details",
];

function handleFormData(formData) {
  // Handle the form data received from the child component
  console.log("Form data received in paymentReceived component:", formData);
  // Perform actions with the form data, e.g., send it to an API
}
</script>
<template>
  <ExpensesBaseLayout>
    <!-- header -->
    <template v-slot:header>
      <Header title="Payment Received" />
    </template>
    <!-- modal -->
    <template v-slot:modal>
      <Modal>
          <!-- form header -->
          <template v-slot:formHeader>
          Create Payment Received
        </template>
        <template v-slot:modalForm>
          <PaymentReceivedModalForm  @formDataSubmitted="handleFormData" />
        </template>
      </Modal>
    </template>
    <!-- table -->
    <template v-slot:table>
      <Table>
        <!-- table header -->
        <template v-slot:tableHeader>
          <ExpensesTableHeader :columnNames="paymentReceivedColumns" />
        </template>
        <template v-slot:tableBody>
          <!-- table body -->
          <PaymentReceivedTableRow :paymentReceived="paymentReceived" />
        </template>
      </Table>
    </template>
  </ExpensesBaseLayout>
</template>
