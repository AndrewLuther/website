import classes from "./BoxGame.module.css";

function HowToPlay() {
  return (
    <div className={classes.howToPlay} id="howToPlayHtml">
      <h2>How To Play</h2>
      <p>
        After pressing 'Start Game', you will see a green box and a red box
        appear. You will control the green box, and your goal is to collect as
        many red boxes as you can without touching the edges of the screen. You
        will always be moving, but you can change directions using the arrow
        keys on a computer, or by tapping the LEFT, RIGHT, UP, and DOWN buttons
        on a mobile device. Every time you collect a red box, it will disappear
        and your point counter will increase. However, collecting boxes will
        increases your speed, making the game more difficult the longer you
        play.
      </p>
    </div>
  );
}

export default HowToPlay;
