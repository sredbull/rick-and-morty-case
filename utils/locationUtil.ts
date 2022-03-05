import { GetLocationsQuery } from "~~/graphql/sdk";

export const parseResidentIdsBylocationResponse = (response: GetLocationsQuery) => {
  if (response.locations.info.pages > 1) {
    console.warn('Not expecting more than one page: Feature request?')
  }

  let residentIds = []
  response.locations.results.forEach((location) => {
    residentIds = [...residentIds, ...location.residents.map((resident) => resident.id )]
  })

  residentIds = [...new Set(residentIds)]

  return residentIds.sort((a, b) => a - b)
}
