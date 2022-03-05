import { GraphQLClient } from 'graphql-request'
import { Sdk, getSdk } from './sdk'

export const getClient = (): Sdk => {
  const client = new GraphQLClient('https://rickandmortyapi.com/graphql')
  const sdk = getSdk(client)

  return sdk
}
