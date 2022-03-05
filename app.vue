<script setup>
import { SearchTypeInput, getResidentIds, getCharacterIds, getCharactersByIds } from './utils/appUtil'

const searchTypeInput = ref(SearchTypeInput.Location)
const searchInput = ref(null)
const locationName = ref(null)
const locationDimension = ref(null)
const episodeID = ref(null)
const episodeName = ref(null)
const residentIds = ref([])
const characterIds = ref([])
const characters = ref([])

const search = () => {
  locationName.value = null
  locationDimension.value = null
  episodeID.value = null
  episodeName.value = null
  residentIds.value = []
  characterIds.value = []
  characters.value = []

  switch (searchTypeInput.value) {
    case SearchTypeInput.Location:
      locationName.value = searchInput.value
      getResidentIds(residentIds, locationName, locationDimension)
      break
    case SearchTypeInput.Dimension:
      locationDimension.value = searchInput.value
      getResidentIds(residentIds, locationName, locationDimension)
      break
    case SearchTypeInput.EpisodeID:
      episodeID.value = searchInput.value
      getCharacterIds(characterIds, episodeName, episodeID)
      break
    case SearchTypeInput.EpisodeName:
      episodeName.value = searchInput.value
      getCharacterIds(characterIds, episodeName, episodeID)
      break
  }
}

watch(residentIds, async () => {
  if (residentIds.value === null || residentIds.value.length === 0 ) {
    return
  }

  getCharactersByIds(residentIds.value, characters)
})

watch(characterIds, async () => {
  if (characterIds.value === null || characterIds.value.length === 0 ) {
    return
  }

  getCharactersByIds(characterIds.value, characters)
})
</script>

<template>
  <div>
    <div class="flex items-center justify-center">
      <div class="flex border-2 border-gray-200 rounded">
        <select v-model="searchTypeInput" class="px-4 py-2 bg-gray-600 text-white">
          <option v-for="searchType in SearchTypeInput" :key="searchType">{{ searchType }}</option>
        </select>
        <input v-model="searchInput" type="text" class="px-4 w-80" placeholder="Search..." />
        <button @click="search" class="px-4 text-white bg-gray-600">
          Search
        </button>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <CharacterTable :characters="characters" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
