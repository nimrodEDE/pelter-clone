import React, { useRef } from "react";
import Card from "./card";
import data from "../data/products.json";
import "../styles/main.css";
import "../styles/utils.css";
import "../styles/cardsRow.css";

function CardsRow() {
  const rowRef = useRef(null);

  const scrollLeft = () => {
    rowRef.current.scrollBy({
      left: -rowRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({
      left: rowRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="store">
      <h2 className="title">היינות שלנו</h2>
      <div className="cardsRowWrapper">
        {/* <button className="scrollBtn left" onClick={scrollLeft}>
          &#8592;
        </button> */}
        <div className="cardsRow" ref={rowRef}>
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              img={item.img || `/images/${item.id}.jpg`} // Optional fallback for image
            />
          ))}
        </div>
        {/* <button className="scrollBtn right" onClick={scrollRight}>
          &#8594;
        </button> */}
      </div>
      <a className="storeLink" href="">
        לרכישה בחנות
      </a>
      <hr style={{ marginBottom: "5rem" }} />
    </div>
  );
}

export default CardsRow;
