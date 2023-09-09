import { Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import CompositionsPage from "./pages/CompositionsPage";
import MainPage from "./pages/MainPage";
import BoxGamePage from "./pages/BoxGamePage";
import classes from "./App.module.css";
import TeamPlannerPage from "./pages/TeamPlannerPage";

function App() {
  return (
    <div className={classes.app}>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/box_game" element={<BoxGamePage />} />
        <Route path="/projects/team_planner" element={<TeamPlannerPage />} />

        <Route path="/compositions" element={<CompositionsPage />} />
      </Routes>
    </div>
  );
}

export default App;
