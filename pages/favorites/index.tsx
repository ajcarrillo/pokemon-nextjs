import { Card, Grid } from "@nextui-org/react"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui"
import { localFavorites } from "../../utils"

const FavoritesPage: NextPage = () => {

  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setFavorites(localFavorites.pokemons())
  }, [])

  return (
    <Layout title="Favoritos">
      {
        favorites.length === 0
          ? <NoFavorites />
          : (
            <Grid.Container gap={2} direction="row" justify="flex-start">
              {
                favorites.map((id) => (
                  <Grid xs={12} sm={6} md={4} lg={3} key={id}>
                    <Card isHoverable isPressable css={{ padding: 10 }}>
                      <Card.Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width="100%"
                        height={140}
                      />
                    </Card>
                  </Grid>
                ))
              }
            </Grid.Container>
          )
      }
    </Layout >
  )
}

export default FavoritesPage
