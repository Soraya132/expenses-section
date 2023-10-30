<script setup>
import {Navbar,Sidebar} from "./components/index"
import {RouterLink,RouterView} from "vue-router"
</script>
<template>
  <div id="nav" class="relative">
  <div class="w-full overflow-x-hidden flex flex-col ">
    <Navbar/>
    <div class="flex">
      <div class="absolute"><Sidebar/></div>
      <main class="px-7 w-full mt-28">
        <RouterView/>
      </main>
    </div>
  </div>
</div>
</template>
<style>
</style>  

