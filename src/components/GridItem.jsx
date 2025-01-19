import "../styles/utils.css";

function GridItem({ id, title, img, desc }) {
  const customStyle = id === 2 ? { width: "25%" } : { width: "50%" };
  return (
    <div className="gridItem" style={{ width: "22%" }}>
      <img style={customStyle} src={img} alt="infoImg" />
      <h5 className="infoCardTitle">{title}</h5>
      <p style={{ width: "unset" }} className="desc">
        {desc}
      </p>
      <button className="specialBtn">קראו עוד</button>
    </div>
  );
}

export default GridItem;
