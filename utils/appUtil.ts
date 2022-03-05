import { getClient } from '../graphql/client'
import { parseResidentIdsBylocationResponse } from './locationUtil'
import { parseCharacterIdsByEpisodeResponse } from './episodeUtil'
import { Ref } from 'nuxt3/dist/app/compat/capi'
import { Scalars } from '~~/graphql/sdk'

export enum SearchTypeInput {
  Location = 'location',
  Dimension = 'dimension',
  EpisodeID = 'episode ID',
  EpisodeName = 'episode name',
}

export const getResidentIds = async (residentIds: Ref, locationName: Ref, locationDimension: Ref) => {
  residentIds.value = parseResidentIdsBylocationResponse(
    await getClient().getLocations({ filter: { name: locationName.value, type: null, dimension: locationDimension.value } })
  )
}

export const getCharacterIds = async (characterIds: Ref, episodeName: Ref, episodeID: Ref) => {
  characterIds.value = parseCharacterIdsByEpisodeResponse(
    await getClient().getEpisodes({ filter: { name: episodeName.value, episode: episodeID.value } })
  )
}

export const getCharactersByIds = async (ids: Scalars['ID'], characters: Ref) => {
  const response = await getClient().getCharactersByIds({ ids: ids})
  characters.value = response.charactersByIds
}
