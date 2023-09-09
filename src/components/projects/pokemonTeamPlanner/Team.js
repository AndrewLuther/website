import TeamMember from "./TeamMember";
import ditto from "../../../images/ditto.png";
import { useEffect } from "react";

function Team(props) {
  useEffect(()=> {
    
  })

  function getTeamMember(index) {
    if (props.teamMembers.length >= index) {
      return props.teamMembers[index];
    } else {
      return {
        name: "Empty",
        sprites: { front_default: ditto },
      };
    }
  }

  return (
    <div>
      <TeamMember pokemonJson={getTeamMember(1)} />
      <TeamMember pokemonJson={getTeamMember(2)} />
      <TeamMember pokemonJson={getTeamMember(3)} />
      <TeamMember pokemonJson={getTeamMember(4)} />
      <TeamMember pokemonJson={getTeamMember(5)} />
      <TeamMember pokemonJson={getTeamMember(6)} />
    </div>
  );
}

export default Team;
