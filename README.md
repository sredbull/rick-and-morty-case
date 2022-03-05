# Nuxt 3 Minimal Starter

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

### Chosen path
For this case I have chosen to use Nuxt3. The ease of use of Nuxt2 made me choose this. Especially because the Rick and Morty api has GraphQL available and with the typescript code generator the whole part of writing types and a client is no more.

The start point is app.vue that provides a basic search and uses the auto generated GraphQL client with TypeScript Types by some imports located in the utils folder.

At the GraphQL folder you see the queries used to query the needed data. These queries are also used to generate the sdk that can be updated by running ```yarn generate-graphql-sdk``` this commands exports the sdk.ts that is used by client.ts to create the GraphQL client.

To list the characters obtained by the search function a character table component is located in the components folder, with some code splitted components.
