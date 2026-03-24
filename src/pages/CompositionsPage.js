import classes from "./Pages.module.css";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import compClasses from "./CompositionsPage.module.css";
import Video from "../components/compositions/Video";
import Audio from "../components/compositions/Audio";

import kingdominoTheme from "../audio/Kingdomino.mp3";
import caveOfMysteries from "../audio/Cave_of_Mysteries.mp3";
import blitzkriegBoogie from "../audio/Blitzkrieg_Boogie.mp3";

function CompositionsPage() {
  const diredireDesc = 
  "\"Dire Dire Disco\" is a fun composition using the Super Mario 64 soundfont. All sounds in the song come from the video game Super Mario 64. " +
  "While writing this piece, I tried to experiment with odd/irregular time signatures, throwing in unexpected rhythmic elements throughout the composition."

  const gullsDesc = 
  "\"Please Don't Feed Me to the Gulls\" is my first composition that incorporates vocals (recorded by Bridget Swift). Bridget and I worked together to write " +
  "the lyrics and vocal melody, and I produced and mixed the composition in Ableton Live."

  const getawayDesc =
    '"Getaway" is a peaceful electronic composition written about a rocky beach in York Harbour. ' +
    "It's about nature, and it's capability to give one an escape from everyday life. This music video features appearances by " +
    "Bridget Swift and her two dogs, Wally and Olive.";

  const variationsDesc =
    '"Variations on Circular Motion" is a piece for percussion and guzheng, which captures the feeling of dizziness. ' +
    "It is structured as a series of variations based on different motives from the main section of the piece. " +
    "However, unlike a typical presentation, this piece presents the variations before the listener hears the main theme. " +
    "This performance was recorded by Jin Xia and Ryan Scott.";

  const kingDominoDesc =
    '"Kingdomino Title Theme" was written for a group project with Ayon Debnath, Sahil Mahey, Benjamin Stanley, and Muhammad Bilal Naseer. ' +
    'Together we designed a digital vesion of the "Kingdomino" board game. I composed this piece to be used for the project.';

  const caveOfMysteriesDesc =
    '"Cave of Mysteries" was written using Sonic Pi, a code-based music-creation and performance tool. ' +
    "The code can be run in the Sonic Pi software, which uses a Ruby-based coding environment. ";

  const blitzkriegBoogieDesc =
    '"Blitzkrieg Boogie" is a groove-based electronic composition that was written using Audio Mulch. ' +
    "It is a fun piece that is meant to make the listener want to dance.";

  return (
    <div className={classes.app}>
      <div className={classes.box}>
        <Header />
      </div>

      <h2 className={compClasses.header}>- Videos -</h2>

      <div className={classes.box}>
        <Video
          title="Please Don't Feed Me to the Gulls"
          subTitle="October 2025"
          description={gullsDesc}
          src="https://www.youtube.com/embed/XcDyVasmk9g"
        />
      </div>


      <div className={classes.box}>
        <Video
          title="Dire Dire Disco"
          subTitle="August 2025"
          description={diredireDesc}
          src="https://www.youtube.com/embed/i9NXYy5vImM"
        />
      </div>

      <div className={classes.box}>
        <Video
          title="Getaway"
          subTitle="June 2022"
          description={getawayDesc}
          src="https://www.youtube.com/embed/1huNw8_9xAA"
        />
      </div>

      <div className={classes.box}>
        <Video
          title="Variations on Circular Motion"
          subTitle="March 2021"
          description={variationsDesc}
          src="https://www.youtube.com/embed/bLg7wZN7yuY"
        />
      </div>

      <h2 className={compClasses.header}>- Audio -</h2>

      <div className={classes.box}>
        <Audio
          title="Kingdomino Title Theme"
          subTitle="March 2022"
          description={kingDominoDesc}
          src={kingdominoTheme}
          type="audio/mpeg"
        />
      </div>

      <div className={classes.box}>
        <Audio
          title="Cave of Mysteries"
          subTitle="August 2021"
          description={caveOfMysteriesDesc}
          src={caveOfMysteries}
          type="audio/mpeg"
        />
      </div>

      <div className={classes.box}>
        <Audio
          title="Blitzkrieg Boogie"
          subTitle="February 2020"
          description={blitzkriegBoogieDesc}
          src={blitzkriegBoogie}
          type="audio/mpeg"
        />
      </div>

      <div className={classes.box}>
        <Footer />
      </div>
    </div>
  );
}

export default CompositionsPage;
