import "../styles/hero.css";

function Hero() {
  return (
    <article className="hero">
      <img
        className="logoHero"
        src="/pelter-clone/images/pelter logo.jpg"
        alt="logo img"
      />
      <img
        className="cover"
        src="/pelter-clone/images/backGround-img.jpg"
        alt="hero cover img"
      />
      <section className="heroBtns">
        <div className="buttonWrapper">
          <a href="">חנות</a>
        </div>
        <div className="buttonWrapper">
          <a href="">מרכז מבקרים</a>
        </div>
      </section>
      <section className="scroll">
        <p>SCROLL</p>
        <div className="verticalLine"></div>
      </section>
    </article>
  );
}

export default Hero;
