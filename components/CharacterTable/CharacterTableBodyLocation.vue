<script setup>
const props = defineProps({
  character: Object,
});
</script>

<template>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-900">
      {{ character.location.type }} - {{ character.location.name }}
    </div>
    <div class="text-sm text-gray-500">
      {{ character.location.dimension }}
    </div>
  </td>
</template>
