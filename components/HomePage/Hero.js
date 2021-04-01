import Image from "next/image";

import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/user1.jpg'
          alt='My Pic'
          width={300}
          height={300}
        />
      </div>
      <h1>Hello, I'm John</h1>
      <p>This is my blog site</p>
    </section>
  );
};

export default Hero;
