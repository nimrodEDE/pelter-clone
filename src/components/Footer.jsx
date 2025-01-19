import "../styles/footer.css";
import React, { useState, useEffect } from "react";

function Footer() {
  const [expanded, setExpanded] = useState({
    shop: false,
    general: false,
    contact: false,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen size on component mount and resize
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 640);
    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleList = (listName) => {
    if (isMobile) {
      setExpanded((prev) => ({
        ...prev,
        [listName]: !prev[listName],
      }));
    }
  };

  return (
    <footer>
      <div className="footer-1">
        <div className="leftFooter">
          <img src="/src/assets/images/pelter logo.png" alt="logo" />
        </div>
        <div dir="rtl" className="rightFooter">
          {/* Shop List */}
          <div>
            <p className="listHeader one" onClick={() => toggleList("shop")}>
              חנות
            </p>
            <hr
              style={{
                marginTop: "0.4rem",

                height: "2.3px",
                backgroundColor: "#262b20",
              }}
            />
            <div
              className={`list ${expanded.shop || !isMobile ? "expanded" : ""}`}
            >
              <ul>
                <li>יקב פלטר</li>
                <li>יקב מטר</li>
                <li>מזקקת פלטר</li>
                <li>מארזים ומתנות</li>
              </ul>
            </div>
          </div>

          {/* General List */}
          <div>
            <p className="listHeader one" onClick={() => toggleList("general")}>
              כללי
            </p>
            <hr
              style={{
                marginTop: "0.4rem",

                height: "2.3px",
                backgroundColor: "#262b20",
              }}
            />
            <div
              className={`list ${
                expanded.general || !isMobile ? "expanded" : ""
              }`}
            >
              <ul>
                <li>מרכז מבקרים</li>
                <li>הסיפור שלנו</li>
                <li>אירועים</li>
                <li>שאלות ותשובות</li>
                <li>תקנון אתר</li>
                <li>תקנון משלוחים והחזרות</li>
              </ul>
            </div>
          </div>

          {/* Contact List */}
          <div>
            <p className="listHeader one" onClick={() => toggleList("contact")}>
              יצירת קשר
            </p>
            <hr
              style={{
                marginTop: "0.4rem",

                height: "2.3px",
                backgroundColor: "#262b20",
              }}
            />
            <div
              className={`list ${
                expanded.contact || !isMobile ? "expanded" : ""
              }`}
            >
              <ul>
                <li>קיבוץ עין זיוון</li>
                <li>077-910-0355, 054-749-1616</li>
                <li>winery@pelterwinery.co.il</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h4 dir="rtl" className="footer-2">
        אזהרה: צריכה מופרזת של אלכוהול מסכנת חיים ומזיקה לבריאות!
      </h4>
      <div
        style={{
          position: "relative",
          backgroundColor: "black",
          textAlign: "center",
          height: "4rem",
        }}
        className="footer-3"
      >
        <a
          style={{
            display: "inline-block",
            color: "white",
            textDecoration: "none",
            fontSize: "0.7rem",
            paddingTop: "2rem",
          }}
          href=""
        >
          Digital Experience By <span style={{ fontWeight: 600 }}>RICHKID</span>
        </a>
        <a className="author" href="">
          Recoded By{" "}
          <span style={{ fontWeight: 600, letterSpacing: "1px" }}>
            NIMROD EDELMAN
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
