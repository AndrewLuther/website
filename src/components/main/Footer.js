import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={classes.main}>
      <Link to="https://github.com/AndrewLuther">
        <button className={classes.button}>Github</button>
      </Link>
      |
      <Link to="https://www.linkedin.com/in/andrewgluther/">
        <button className={classes.button}>LinkedIn</button>
      </Link>
      |
      <Link to="https://www.youtube.com/@andrewluthercomposer5432">
        <button className={classes.button}>Youtube</button>
      </Link>
    </div>
  );
}

export default Footer;
