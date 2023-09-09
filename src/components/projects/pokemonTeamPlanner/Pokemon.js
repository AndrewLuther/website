import { useState, useEffect } from "react";
import classes from "./TeamPlanner.module.css";
import ditto from "../../../images/ditto.png";

function Pokemon(props) {
  const [pokemonJson, setPokemonJson] = useState({
    name: "Loading...",
    sprites: { front_default: ditto },
  });

  useEffect(() => {
    let html = <div></div>;
    if (props && props.entry) {
      (async () => {
        const pokemonResponse = await fetchPokemonResponseWithEntry(
          props.entry
        );
        setPokemonJson(pokemonResponse);
      })();
      return () => {};
    } else {
      setPokemonJson(html);
    }
  }, [props]);

  function addPokemonToTeam(pokemonJson) {
    console.log(pokemonJson);
    const newTeamMembers = props.teamMembers;

    if (newTeamMembers >= 6) {
      newTeamMembers.pop();
    }

    newTeamMembers.push(pokemonJson);

    props.setTeamMembers(newTeamMembers);
  }

  return (
    <div
      className={classes.pokemon}
      onClick={() => {
        addPokemonToTeam(pokemonJson);
      }}
    >
      <div className={classes.pokemonAndName}>
        <h2 className={classes.pokemon_name}>{pokemonJson.name}</h2>
        <img
          className={classes.pokemon_img}
          alt={pokemonJson.name}
          src={pokemonJson.sprites.front_default}
        />
      </div>
    </div>
  );
}

async function fetchPokemonResponseWithEntry(entry) {
  if (!entry.pokemon_species) {
    return {};
  }
  return fetch(entry.pokemon_species.url).then(async (speciesResponse) => {
    const respJson = await speciesResponse.json();
    for (const variety of respJson.varieties) {
      if (variety.is_default) {
        const pokemonResponse = await fetchPokemonResponseWithVariety(variety);
        return pokemonResponse;
      }
    }
  });
}

// function getPokemonFromCache(entry) {
//   const allCachedPokemon = JSON.parse(localStorage.getItem("pokemon"));
//   if (!allCachedPokemon) {
//     localStorage.setItem("pokemon", JSON.stringify({}));
//     return null;
//   } else {
//     return allCachedPokemon[entry.pokemon_species.name];
//   }
// }

// function putPokemonInCache(pokemonName, pokemonResponse) {
//   let allCachedPokemon = JSON.parse(localStorage.getItem("pokemon"));
//   if (!allCachedPokemon) {
//     allCachedPokemon = {};
//   }
//   allCachedPokemon[pokemonName] = pokemonResponse;
//   localStorage.setItem("pokemon", JSON.stringify(allCachedPokemon));
// }

async function fetchPokemonResponseWithVariety(variety) {
  return fetch(variety.pokemon.url).then(async (pokemonResponse) => {
    const respJson = await pokemonResponse.json();
    return respJson;
  });
}

export default Pokemon;
