import classes from "./Audio.module.css";

function Audio(props) {
  return (
    <div className={classes.main}>
      <h2>{props.title}</h2>
      <h3>{props.subTitle}</h3>
      <p>{props.description}</p>

      <audio className={classes.audioPlayer} controls>
        <source src={props.src} type={props.type}></source>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Audio;
