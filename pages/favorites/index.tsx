import { NextPage } from "next"
import { useEffect, useState } from "react"
import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui"
import { FavoritePokemons } from "../../components/ui"
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
          : <FavoritePokemons pokemons={favorites} />
      }
    </Layout >
  )
}

export default FavoritesPage
