<script setup>
const props = defineProps({
  character: Object,
});
</script>

<template>
  <td class="px-6 py-4 whitespace-nowrap">
    <span
      v-if="character.status === 'Alive'"
      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
    >
      {{ character.status }}
    </span>
    <span
      v-else-if="character.status === 'Dead'"
      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
    >
      {{ character.status }}
    </span>
    <span
      v-else
      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800"
    >
      {{ character.status }}
    </span>
  </td>
</template>
