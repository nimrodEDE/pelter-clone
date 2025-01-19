import "../styles/card.css";

function Card({ title, price, img }) {
  return (
    <div className="card">
      <img className="wineImg" src={img} alt="wine" />
      <h4 className="wineName">{title}</h4>
      <p className="price">{price}</p>
      <button className="addCartBtn">הוספה לסל</button>
    </div>
  );
}

export default Card;
