import "../styles/main.css";
import NavBar from "../components/NavBar";
import Hero from "../components/hero";
import About from "../components/about";
// import Card from "../components/card";
import CardsRow from "../components/cardsRow";
import GridRow from "../components/GridRow";
import GridItem from "../components/GridItem";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <CardsRow></CardsRow>
      <GridRow></GridRow>
      <Footer></Footer>
      {/* <Footer2></Footer2> */}
    </>
  );
}

export default Home;
