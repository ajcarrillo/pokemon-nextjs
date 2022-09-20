import { Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  pokemon: number;
}

export const FavoritePokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter()

  const onClick = () => {
    router.push(`/pokemon/${pokemon}`)
  }

  return (
    <Card isHoverable isPressable css={{ padding: 10 }} onClick={onClick}>
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`}
        width="100%"
        height={140}
      />
    </Card>
  )
}
