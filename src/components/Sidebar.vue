<script setup>
import {imageObjects} from "../data"
</script>

<template>
  <aside class="lg:w-[120px] shadow-lg  overflow-x-auto">
    <nav>
      <ul class="flex flex-row lg:flex-col ">
        <template v-for="(item, index) in imageObjects" :key="index" >
          <li  
          class="h-[80px]  px-7 flex items-center justify-center " :class="{'border-b-gray-300':index !== imageObjects.length -1}">
            <div class="flex flex-col items-center justify-center"
            > <img :src="item.src" alt="icon" class="w-[24px] h-[24px]" />
            <span class="menu-item  text-[12px] text-center mt-2">{{ item.name }}</span></div>
          </li>
          <!-- Add border at the end of each box except the last one -->
          <li  v-if="index !== imageObjects.length - 1" class=" border-r lg:border-b border-gray-300 w-full"></li>
        </template>
      </ul>
    </nav>
  </aside>
</template>

