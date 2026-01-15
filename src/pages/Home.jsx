import hero from "../assets/img-main.jpg";

function Home() {
  return (
    <div className="page">
      <img src={hero} alt="Students" className="hero-img-full" />

      <h1>Home</h1>

      <p>
        If you are excited by the latest technological advances and have a
        passion for problem-solving, join us at RP School of Infocomm (SOI).
        We will help you discover your hidden technical skills and nurture
        your creative digital dreams. We offer six diploma programmes across
        a wide range of infocomm disciplines.
      </p>
    </div>
  );
}

export default Home;
