import "../styles/gridRow.css";
import info from "../data/info.json";
import GridItem from "./GridItem";

function GridRow() {
  return (
    <>
      <section className="info">
        <div style={{ marginTop: "10rem" }} className="topLine"></div>
        <h5
          style={{ fontSize: "0.7rem", marginBottom: "6rem" }}
          className="subTitle"
        >
          OUR WINERIES
        </h5>
        <div className="gridRow">
          {info.map((item) => (
            <GridItem
              id={item.id}
              key={item.id}
              title={item.title}
              img={item.img}
              desc={item.desc}
            />
          ))}
        </div>
      </section>
      <img
        className="slidingImg"
        src="/pelter-clone/images/sliding-picture-3.jpg"
        alt="sliding-picture-3"
      />
      <section
        style={{ marginTop: "10rem", marginBottom: "10rem" }}
        className="colomns"
      >
        <div style={{ textAlign: "center" }} className="colomns-text">
          <div className="topLine"></div>
          <h5 className="subTitle">THE AGING CELLAR</h5>
          <h4 className="title">מרכז המתיישנים</h4>
          <p
            style={{ padding: "0 2rem", color: "#262b20" }}
            dir="rtl"
            className="desc"
          >
            מעבר לבצירים הנוכחיים המוצעים למכירה באתר ובחנות היין, אנחנו מציעים
            גם בקבוקי מגנום ויינות מתיישנים שונים ומיוחדים מהאוסף הפרטי שלנו.{" "}
            <br />
            המכירה מתבצעת בהתאם למצב המלאי המשתנה.
            <br /> <br />
            לפרטים נוספים ורכישה:
          </p>

          <div className="links">
            <a style={{ color: "#262b20" }} href="">
              Shop@pelterwinery.co.il
            </a>{" "}
            |{" "}
            <a style={{ color: "#262b20" }} href="">
              054-749-1616
            </a>
          </div>
        </div>
        <div style={{ marginTop: "5rem" }} className="colomns-img">
          <img
            src="/pelter-clone/images/about-img4.jpg"
            alt="Wine Bottles on the ground"
          />
        </div>
      </section>
      <article className="formBox">
        <div className="left">
          <img
            className="imgBox"
            src="/pelter-clone/images/boxImg.png"
            alt="boxImg"
          />
        </div>
        <div dir="rtl" className="right">
          <h5 className="infoCardTitle">הישארו מעודכנים</h5>
          <p>הצטרפו לרשימה שלנו וקבלו עדכונים על אירועים</p>
          <form action="">
            <label htmlFor="mail"></label>
            <input
              name="mail"
              id="mail"
              type="email"
              placeholder="  כתובת מייל"
            />
            <br />
            <div style={{ textAlign: "right" }} className="acceptTermInput">
              <input name="acceptTerms" id="acceptTerms" type="checkBox" />
              <label
                style={{ marginRight: "0.2rem" }}
                className="labelAC"
                htmlFor="acceptTerms"
              >
                אני מאשר/ת קבלת דיוור פרסומי
              </label>
            </div>
            <input
              id="submitBtn"
              name="sumbitBtn"
              type="submit"
              value={"הרשמה"}
            />
          </form>
        </div>
      </article>
    </>
  );
}

export default GridRow;
