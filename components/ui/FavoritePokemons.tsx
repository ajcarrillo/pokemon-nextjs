import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {
        pokemons.map((id) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={id}>
            <FavoritePokemonCard pokemon={id} />
          </Grid>
        ))
      }
    </Grid.Container>
  )
}
