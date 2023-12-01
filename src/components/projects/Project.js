import classes from "./Project.module.css";
import { Link } from "react-router-dom";

function Project(props) {
  return (
    <div className={classes.main}>
      <div className={classes.text}>
        <h2 className={classes.projectTitle}>{props.title}</h2>
        <h3>{props.subTitle}</h3>
        <p className={classes.projectDesc}>{props.text}</p>

        {props.hasLink && (
          <Link to={props.link}>
            <button className={classes.button}>{props.buttonText}</button>
          </Link>
        )}

        {props.hasPlayLink && (
          <Link to={props.playLink}>
            <button className={classes.button}>Play</button>
          </Link>
        )}
      </div>

      <img
        alt={props.title}
        className={classes.projectImage}
        src={props.image}
      ></img>
    </div>
  );
}

export default Project;
