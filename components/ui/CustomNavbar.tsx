import { Navbar, Text } from "@nextui-org/react"
import { FC } from "react"
import { PokemonLogo } from "./PokemonLogo"

export const CustomNavbar: FC = () => {

  return (
    <Navbar
      isBordered
      variant={"sticky"}
    >
      <Navbar.Brand>
        <PokemonLogo/>
        <Text
          b
          color="inherit"
          hideIn="xs"
        >
          Pokémon Static
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link
          isActive
          href="#"
        >Favoritos</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  )
}
