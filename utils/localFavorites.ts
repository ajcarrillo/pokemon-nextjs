const toggleFavorite = (id: number): void => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  )
  if (favorites.includes(id)) {
    favorites = favorites.filter((favorite) => favorite !== id)
  } else {
    favorites.push(id)
  }
  localStorage.setItem("favorites", JSON.stringify(favorites))
}

const existsInFavorites = (id: number): boolean => {
  if (typeof window === "undefined") return false
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  )
  return favorites.includes(id)
}

const pokemons = (): number[] => {
  if (typeof window === "undefined") return []
  return JSON.parse(localStorage.getItem("favorites") || "[]")
}

export default { toggleFavorite, existsInFavorites, pokemons }
