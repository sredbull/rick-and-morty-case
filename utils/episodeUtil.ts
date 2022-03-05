import { GetEpisodesQuery } from "~~/graphql/sdk";

export const parseCharacterIdsByEpisodeResponse = (response: GetEpisodesQuery) => {
  if (response.episodes.info.pages > 1) {
    console.warn('Not expecting more than one page: Feature request?')
  }

  let characterIds = []
  response.episodes.results.forEach((location) => {
    characterIds = [...characterIds, ...location.characters.map((resident) => resident.id )]
  })

  characterIds = [...new Set(characterIds)]

  return characterIds.sort((a, b) => a - b)
}
