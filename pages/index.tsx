import type { GetStaticProps, NextPage } from "next"
import { Card, Grid, Row, Text } from "@nextui-org/react"
import { Layout } from "../components/layouts"
import { pokeApi } from "../api"
import { PokemonListResponse, SmallPokemon } from "../interfaces"

interface Props {
  pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title={"Listado de pokemons"}>
      <Grid.Container
        gap={2}
        justify="flex-start"
      >
        {pokemons.map(({ id, name, image }) => (
          <Grid
            xs={2}
            sm={3}
            md={4}
            xl={1}
            key={id}
          >
            <Card
              isHoverable
              isPressable
            >
              <Card.Body>
                <Card.Image
                  src={image}
                  width="100%"
                  height={140}
                  alt={name}
                />
              </Card.Body>
              <Card.Footer>
                <Row justify="space-between">
                  <Text transform="capitalize">{name}</Text>
                  <Text>#{id}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151")
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    const id = index + 1
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    return { ...pokemon, id: +id, image }
  })

  return {
    props: {
      pokemons,
    },
  }
}


export default Home
