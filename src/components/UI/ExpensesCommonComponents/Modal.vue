<script setup>
import { useTabsStore } from "../../../stores/expenseStore";
const tabsStore = useTabsStore();
</script>
<template>
  <transition name="fade">
    <div
      v-if="tabsStore.isModalVisible"
      class="absolute w-full bg-black bg-opacity-30 top-0 left-0 h-full lg:min-h-[1070px] px-2 sm:px-8 z-50"
    >
      <transition class="fade-content">
        <div
          class="bg-white flex flex-col w-[95%] lg:w-[50%] h-content rounded-[16px] my-10 py-10 mx-auto modal-content-appear"
        >
          <header
            class="flex justify-between items-center border-b px-3 md:px-8 py-1 lg:px-14"
          >
            <div class="text-black form-header pb-3 roboto text-2xl font-[400]">
              <!-- form header -->
              <slot name="formHeader"></slot>
            </div>
            <div @click="tabsStore.closeModal">
              <img src="/src/assets/close.svg" alt="close icons" />
            </div>
          </header>
          <div>
            <!-- Form will be placed here -->
            <slot name="modalForm"></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}
.fade-leave-to {
  opacity: 0;
}
.fade-content-enter-from {
  opacity: 0;
}
.fade-content-enter-active,
.fade-content-leave-active {
  transition: opacity 1.4s ease;
}
.fade-content-leave-to {
  opacity: 0;
}
</style>
