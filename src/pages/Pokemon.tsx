import { useLocation } from "preact-iso";
import { useGetDitto } from "../services/pokemonQueries";

export const Pokemon = () => {
  const { route } = useLocation();
  const { data, isLoading } = useGetDitto();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => route("/")}>Home</button>
      <h1>Pokemon</h1>
      <img src={data.sprites.front_default} alt={data.name} />
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};
