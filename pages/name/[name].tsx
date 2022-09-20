import { Grid, Card, Button, Container, Text, Image } from "@nextui-org/react"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useState } from "react"
import { pokeApi } from "../../api"
import { Layout } from "../../components/layouts"
import { Pokemon, PokemonListResponse } from "../../interfaces"
import { localFavorites } from "../../utils"
import confetti from "canvas-confetti"

interface Props {
  pokemon: Pokemon
}

const NamePage: NextPage<Props> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState(localFavorites.existsInFavorites(pokemon.id))

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsFavorite(!isFavorite)

    if (isFavorite) return;

    confetti({
      zIndex: 9999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: { x: 1, y: 0 }
    })

  }

  return (
    <Layout title={`${pokemon.id} - ${pokemon.name}`}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid
          xs={12}
          sm={4}
        >
          <Card isHoverable>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || ""}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={8}
        >
          <Card>
            <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button color="gradient" ghost={!isFavorite} onPress={onToggleFavorite}>
                {isFavorite ? "Favorito" : "Guardar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex">
                <Image src={pokemon.sprites.front_default} width={100} height={100} alt={pokemon.name} />
                <Image src={pokemon.sprites.back_default} width={100} height={100} alt={pokemon.name} />
                <Image src={pokemon.sprites.front_shiny} width={100} height={100} alt={pokemon.name} />
                <Image src={pokemon.sprites.back_shiny} width={100} height={100} alt={pokemon.name} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151")
  const pokemons: string[] = data.results.map((pokemon) => {
    return pokemon.name
  })

  const paths = pokemons.map((pokemon) => ({
    params: { name: pokemon },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`)

  return {
    props: { pokemon: data },
  }
}

export default NamePage