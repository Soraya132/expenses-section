<script setup>
import {
  Header,
  Modal,
  Table,
  ExpensesBaseLayout,
  PaymentSentModalForm,
  PaymentSentTableRow,
  ExpensesTableHeader,
} from "../components/index";

const paymentSent = [
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
const paymentSentColumns = [
  "date",
  "reference",
  "addedBy",
  "party",
  "amount",
  "details",
];
function handleFormData(formData) {
  // Handle the form data received from the child component
  console.log("Form data received in paymentSent component:", formData);
  // Perform actions with the form data, e.g., send it to an API
}
</script>
<template>
  <ExpensesBaseLayout>
    <!-- header -->
    <template v-slot:header>
      <Header title="Payment Sent" />
    </template>
    <!-- modal -->
    <template v-slot:modal>
      <Modal>
          <!-- form header -->
          <template v-slot:formHeader>
          Create Payment Sent
        </template>

        <template v-slot:modalForm>
          <PaymentSentModalForm  @formDataSubmitted="handleFormData" />
        </template>
      </Modal>
    </template>
    <!-- table -->
    <template v-slot:table>
      <Table>

        <template v-slot:tableHeader>
          <!-- table header -->
          <ExpensesTableHeader :columnNames="paymentSentColumns" />
        </template>

        <template v-slot:tableBody>
          <!-- table body -->
          <paymentSentTableRow :paymentSent="paymentSent" />
        </template>
      </Table>
    </template>
    
  </ExpensesBaseLayout>
</template>
