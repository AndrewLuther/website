import classes from "./Pages.module.css";
import headshot from "../images/headshot.jpg";
import Image from "../components/Image";
import Header from "../components/main/Header";
import Bio from "../components/main/Bio";
import Footer from "../components/main/Footer";

function MainPage() {
  return (
    <div className={classes.app}>
      <div className={classes.box}>
        <Header />
      </div>

      <Image alt="andrew_headshot" src={headshot}></Image>

      <div className={classes.box}>
        <Bio />
      </div>

      <div className={classes.box}>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
