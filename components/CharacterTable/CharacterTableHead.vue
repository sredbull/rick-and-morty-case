<script setup>
const tableHeaders = ref(["Name", "Status", "location"]);
</script>

<template>
  <thead class="bg-gray-50">
    <tr>
      <th
        v-for="tableHeader in tableHeaders"
        :key="tableHeader"
        scope="col"
        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        {{ tableHeader }}
      </th>
    </tr>
  </thead>
</template>
