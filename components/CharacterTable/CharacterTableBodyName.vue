<script setup>
const props = defineProps({
  character: Object,
});
</script>

<template>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex">
      <div class="">
        <img
          class="h-10 w-10 rounded-full"
          :src="character.image"
          :alt="character.name"
        />
      </div>
      <div class="ml-4">
        <div class="text-sm text-gray-900">{{ character.name }}</div>
        <div class="text-sm text-gray-700">
          {{ character.species }} - {{ character.gender
          }}{{ character.type ? " (" + character.type + ")" : "" }}
        </div>
        <div class="text-xs text-gray-500">
          {{ character.origin.type }} - {{ character.origin.name }}
        </div>
        <div class="text-xs text-gray-500">
          {{ character.origin.dimension }}
        </div>
      </div>
    </div>
  </td>
</template>
