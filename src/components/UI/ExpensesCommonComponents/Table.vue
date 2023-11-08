<template>
  <div class="overflow-x-auto mt-20">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase">
        <!-- Table header will be placed here -->
        <slot name="tableHeader"></slot>
      </thead>
      <tbody>
        <!-- Table body will be placed here -->
        <slot name="tableBody"></slot>
      </tbody>
    </table>
  </div>
</template>
