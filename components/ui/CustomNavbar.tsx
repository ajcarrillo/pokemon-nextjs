import { Link, Navbar, Text } from "@nextui-org/react"
import { FC } from "react"
import { PokemonLogo } from "./PokemonLogo"
import NextLink from "next/link"

export const CustomNavbar: FC = () => {

  return (
    <Navbar
      isBordered
      variant={"sticky"}
    >
      <Navbar.Brand>
        <PokemonLogo />
        <NextLink href="/" passHref>
          <Link>
            <Text
              b
              color="inherit"
              hideIn="xs"
            >
              Pokémon Static
            </Text>
          </Link>
        </NextLink>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <NextLink href="/favorites" passHref>
          <Link block color="secondary">Favoritos</Link>
        </NextLink>
      </Navbar.Content>
    </Navbar>
  )
}
