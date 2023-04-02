import { Link } from "react-router-dom";
import classes from "./Bio.module.css";

function Bio() {
  return (
    <div className={classes.main}>
      <p className={classes.bioText}>
        I am a music enthusiast and software developer. I have a passion for
        both music composition and computer science, and I am particularly
        interested in the application of computer science for electronic music
        composition, production, and analysis.
        <br />
        <br />I graduated with a Bachelor of Music (Honours) in 2021 from
        Memorial University, where I studied piano under Dr. Kristina Szutor and
        music composition under Dr. Andrew Staniland and Dr. Clark Ross. You can
        find some of my music compositions <Link to="/compositions">here</Link>.
        I performed with the Memorial University Jazz Band and Wind Ensemble
        under the direction of professors Florian Hoefner and Bill Brennan,
        respectively.
        <br />
        <br />I have also been pursuing a Bachelor of Science with a major in
        Computer Science at Memorial University, and I have been developing my
        programming and research skills. You can find some of my programming
        projects <Link to="/projects">here</Link>. Currently, I am completing an
        internship at Compusult Ltd. in Mount Pearl Newfoundland, where I work
        as a Programmer/Developer.
        <br />
        <br />
        When I am not coding or composing, I enjoy hiking, gaming, and listening
        to music (of course!).
      </p>
    </div>
  );
}

export default Bio;
