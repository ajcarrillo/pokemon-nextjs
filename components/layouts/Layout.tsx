import Head from "next/head"
import React, { FC } from "react"
import { CustomNavbar } from "../ui"

type Props = {
  title?: string
  children: React.ReactNode
}

const origin = (typeof window === "undefined") ? "" : window.location.origin

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
          content={`Información sobre el pokémon ${title}`}
        />
        <meta
          name="keywords"
          content={`pokemon, pokedex, ${title}`}
        />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <CustomNavbar />
      <main>
        {children}
      </main>
    </>
  )
}

