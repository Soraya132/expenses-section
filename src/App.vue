<script setup>
import {Navbar,Sidebar} from "./components/index"
import Home from "./views/Home.vue"
</script>
<template>
  <div class="w-full overflow-x-hidden flex flex-col relative">
    <Navbar />
    <div class="flex flex-col lg:flex-row gap-3 lg:gap-0 ">
      <Sidebar />
      <main class="px-7 w-full">
        <Home/>
      </main>
    </div>
  </div>
</template>
<style scoped></style>

