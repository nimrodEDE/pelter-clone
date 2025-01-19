import "../styles/utils.css";
import "../styles/about.css";

function About() {
  return (
    <article className="aboutSection">
      <section className="articleHeader">
        <div className="topLine"></div>
        <h5 className="subTitle">WINE STORE</h5>
        <h4 className="title">יקב פלטר</h4>
      </section>
      <section className="colomns">
        <div style={{ order: 2 }} className="colomns-img">
          <img
            src="/public/images/about-img1.jpg"
            alt="Wine Bottles on the ground"
          />
        </div>
        <div style={{ order: 1 }} className="colomns-text">
          <h4 className="title">פלטר עד הבית</h4>
          <p dir="rtl" className="desc">
            פה אפשר להזמין יין ומארזי שי עד הבית,
            <br /> בהזמנה של 12 בקבוקים מקבלים בקבוק נוסף במתנה.
          </p>
          <button className="specialBtn">לרכישה</button>
        </div>
      </section>
      <img
        className="slidingImg"
        src="/public/images/sliding-picture-1.jpg"
        alt="sliding-picture-1"
      />
      <section className="colomns">
        <div className="colomns-img VC">
          <img
            src="/public/images/about-img2.jpg"
            alt="Wine Bottles on the ground"
          />
        </div>
        <div className="colomns-text VC">
          <div className="topLine"></div>
          <h5 className="subTitle">VISITORS CENTER</h5>
          <h4 className="title">מרכז המבקרים</h4>
          <p dir="rtl" className="desc">
            היקב ממוקם בקיבוץ עין זיוון בצפון רמת הגולן. <br /> האירוח ביקב
            מתקיים בחלל הייצור לצד מיכלי התסיסה והחביות, <br /> החיבור בין
            טעימות יין וייצור יין טבעי עבורנו. <br /> בביקור אצלנו ניתן לטעום
            ממגוון היינות של פלטר ומטר וכן ממוצרי המזקקה, כמו כן ניתן לרכוש כוס
            או בקבוק לישיבה במקום.
          </p>
          <button className="specialBtn">קראו עוד</button>
        </div>
      </section>
      <img
        className="slidingImg"
        src="/public/images/sliding-picture-2.jpg"
        alt="sliding-picture-2"
      />
      <section className="colomns">
        <div
          style={{ order: 2, marginBottom: "4rem" }}
          className="colomns-img VC"
        >
          <img
            src="/public/images/about-img3.jpg"
            alt="Wine Bottles on the ground"
          />
        </div>
        <div style={{ order: 1 }} className="colomns-text VC">
          <div className="topLine"></div>
          <h5 className="subTitle">EVENTS</h5>
          <h4 className="title">אירועים</h4>
          <p dir="rtl" className="desc">
            ניתן לערוך אירועים פרטיים ביקב ואירוח של קבוצות מאורגנות. <br />
            פעמיים בחודש בימי חמישי מתקיימים ערבי שף ביקב. ניתן להתעדכן בעמוד
            האיסטגרם שלנו או להתקשר ליקב ולשאול מתי הארוחה הבאה. האירועים
            מתעדכנים בעמוד האינסטגרם שלנו ואפשר גם להצטרף לרשימת הדיוור ולקבל
            מידע על אירועים וארוחות.
          </p>
          <button className="specialBtn">קראו עוד</button>
        </div>
      </section>
    </article>
  );
}

export default About;
