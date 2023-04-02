import classes from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={classes.main}>
      <h1 className={classes.name}>Andrew Luther</h1>
      <div className={classes.navigation}>
        <Link className={classes.link} to="/">
          <button className={classes.button}>Home</button>
        </Link>
        |
        <Link className={classes.link} to="/projects">
          <button className={classes.button}>Programming</button>
        </Link>
        |
        <Link className={classes.link} to="/compositions">
          <button className={classes.button}>Music</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
