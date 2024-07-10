import classes from "./hero.module.css";
import Image from "next/image";
import profileImage from "/public/images/site/matheus.jpeg";


function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={profileImage}
          alt="An image showing Matheus"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Matheus</h1>
      <p> I blog about web development</p>
    </section>
  );
}

export default Hero;
