import { useState } from "react";
import PokemonList from "./PokemonList";
import classes from "./TeamPlanner.module.css";
import Team from "./Team";

function TeamPlanner() {
  const [pokedex, setPokedex] = useState(null);
  const selectorId = "gameSelector";
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className={classes.planner}>
      <h2>Pokemon Team Planner</h2>
      <label htmlFor={selectorId}>Select a Game</label>
      <select
        id={selectorId}
        onChange={(e) => {
          setPokedex(e.target.value);
        }}
      >
        <option value=""></option>
        <option value="kanto">FireRed/LeafGreen</option>
        <option value="hoenn">Ruby/Sapphire/Emerald</option>
        <option value="updated-johto">HeartGold/SoulSilver</option>
        <option value="original-sinnoh">Diamond/Pearl</option>
        <option value="extended-sinnoh">Platinum</option>
        <option value="original-unova">Black/White</option>
      </select>

      <Team teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
      <PokemonList
        pokedex={pokedex}
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
      />
    </div>
  );
}

export default TeamPlanner;
