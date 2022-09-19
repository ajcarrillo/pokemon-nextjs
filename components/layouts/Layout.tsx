import Head from "next/head"
import React, { FC } from "react"
import { CustomNavbar } from "../ui"

type Props = {
  title?: string
  children: React.ReactNode
}

export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta
          name="author"
          content="Andrés Carrillo"
        />
        <meta
          name="description"
          content="Información del pokémon:"
        />
        <meta
          name="keywords"
          content="pokemon, pokedex"
        />
      </Head>
      <CustomNavbar/>
      <main>
        {children}
      </main>
    </>
  )
}

