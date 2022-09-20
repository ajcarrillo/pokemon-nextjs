import { Layout } from "../../components/layouts"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Pokemon } from "../../interfaces"
import { pokeApi } from "../../api"
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react"
import { localFavorites } from "../../utils"
import { useState } from "react"
import confetti from "canvas-confetti"

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

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
  const paths = Array.from({ length: 151 }, (_, i) => ({
    params: { id: `${i + 1}` },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

  return {
    props: { pokemon: data },
  }
}

export default PokemonPage
