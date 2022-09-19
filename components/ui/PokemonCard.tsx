import { SmallPokemon } from "../../interfaces"
import { FC } from "react"
import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"

interface Props {
  pokemon: SmallPokemon
}
export const PokemonCard: FC<Props> = ({pokemon}) => {
  const router = useRouter()

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`)
  }

  return (
    <Grid
      xs={2}
      sm={3}
      md={4}
      xl={1}
      key={pokemon.id}
    >
      <Card
        isHoverable
        isPressable
        onPress={onClick}
      >
        <Card.Body>
          <Card.Image
            src={pokemon.image}
            width="100%"
            height={140}
            alt={pokemon.name}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
