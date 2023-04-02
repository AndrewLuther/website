import classes from "./Image.module.css";

function Image(props) {
  return (
    <div className={classes.main}>
      <img alt={props.alt} src={props.src} className={classes.image}></img>
    </div>
  );
}

export default Image;
