import Image from "next/image"

export const PokemonLogo = () => (
  <Image
    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
    alt={"Pokemon Logo"}
    width={70}
    height={70}
  />
)

