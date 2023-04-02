import classes from "./Video.module.css";

function Video(props) {
  return (
    <div className={classes.main}>
      <h2>{props.title}</h2>
      <h3>{props.subTitle}</h3>
      <p>{props.description}</p>

      <iframe
        className="videoFrame"
        width="100%"
        height="315"
        src={props.src}
        title={props.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
