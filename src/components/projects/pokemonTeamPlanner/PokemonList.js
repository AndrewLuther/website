import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function PokemonList(props) {
  const [pokemonListHtml, setPokemonListHtml] = useState([]);
  useEffect(() => {
    let html = [];
    if (props && props.pokedex) {
      (async () => {
        const pokedexResponse = await fetchPokedexResponse(props.pokedex);
        for (const pokemon_entry of pokedexResponse.pokemon_entries) {
          const key = pokemon_entry.pokemon_species.name;
          html.push(
            <Pokemon
              key={key}
              entry={pokemon_entry}
              teamMembers={props.teamMembers}
              setTeamMembers={props.setTeamMembers}
            />
          );
        }
        setPokemonListHtml(html);
      })();
      return () => {};
    } else {
      setPokemonListHtml(html);
    }
  }, [props]);

  return <div id="pokemonList">{pokemonListHtml}</div>;
}

async function fetchPokedexResponse(pokedex) {
  const cachedPokedexResponse = JSON.parse(localStorage.getItem(pokedex));
  if (cachedPokedexResponse) return cachedPokedexResponse;
  else {
    return fetch("https://pokeapi.co/api/v2/pokedex/" + pokedex).then(
      async (pokedexResponse) => {
        const respJson = await pokedexResponse.json();
        localStorage.setItem(pokedex, JSON.stringify(respJson));
        return respJson;
      }
    );
  }
}

export default PokemonList;
