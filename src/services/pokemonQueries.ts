import { useQuery } from "@tanstack/react-query";
import { HTTP } from "./http";

const PokemonQueryKeys = {
  ditto: ["ditto"],
} as const;

// https://pokeapi.co/
type PokemonResponse = {
  sprites: {
    front_default: string;
  };
  weight: number;
  name: string;
};

export const useGetDitto = () => {
  return useQuery({
    queryKey: PokemonQueryKeys.ditto,
    queryFn: async () => {
      const { data } = await HTTP.get<PokemonResponse>("pokemon/ditto");
      return data;
    },
  });
};
