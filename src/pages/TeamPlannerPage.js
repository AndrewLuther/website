import TeamPlanner from "../components/projects/pokemonTeamPlanner/TeamPlanner";
import classes from "./Pages.module.css";

function TeamPlannerPage() {
  return (
    <div className={classes.app}>
      <div className={classes.box}>
        <TeamPlanner />
      </div>
    </div>
  );
}

export default TeamPlannerPage;
