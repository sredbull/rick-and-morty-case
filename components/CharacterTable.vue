<script setup>
const props = defineProps({
  characters: Array
})
</script>

<template>
  <table class="min-w-full divide-y divide-gray-200">
    <CharacterTableHead />
    <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="character in characters" :key="character.name">
        <CharacterTableBodyName :character="character" />
        <CharacterTableBodyStatus :character="character" />
        <CharacterTableBodyLocation :character="character" />
      </tr>
    </tbody>
  </table>
</template>
