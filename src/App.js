import { Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import CompositionsPage from "./pages/CompositionsPage";
import MainPage from "./pages/MainPage";
import BoxGamePage from "./pages/BoxGamePage";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/box_game" element={<BoxGamePage />} />
        <Route path="/compositions" element={<CompositionsPage />} />
      </Routes>
    </div>
  );
}

export default App;
