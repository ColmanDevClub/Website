import React from "react";
import css from "./style.module.css";
import Button from "@mui/material/Button";
import Card from "../../components/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";

const index = () => {
  const btnStyle = {
    fontSize: "1.25rem;",
    background:
      "radial-gradient(circle, rgba(0,223,129,1) 0%, rgba(0,136,79,1) 100%);",
    color: "black;",
    fontWeight: "700;",
    padding: "0.25rem 6rem;",
    transition: "filter 200ms ease-in-out;",
    margin: "0 auto;",
  };

  const settings = {
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const card = {
    image_url: `https://picsum.photos/200`,
    title: `כותרת`,
    description: `תיאור הפרוייקט`,
    github_url: `www.github.com`,
    website_url: `www.google.com`,
  };

  return (
    <section className={css["homepage"]}>
      <div
        className={css["hero"]}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h1 className={css["title"]}>מועדון מפתחים/ות</h1>
        <div className={css["content"]}>
          <p>
            ללמוד לפתח זה דבר אחד - לממש את הלמידה זה משהו אחר לגמרי. כדי לפתח
            טוב, צריך להתאמץ ולא להפסיק לכתוב ולהכיר את הטכנולוגיות הכי חדישות
            ומתקדמות בשוק. זה מה שאנחנו שואפים אליו במועדון הפיתוח של המכללה
            למינהל. אנחנו לוקחים את הידע שלנו, ומנסים לדחוף אותו שלב אחד קדימה
            ולממש אותו.
          </p>
          <p>
            אנו ניקח את הכלים שאנחנו לומדים בתואר וניצור איתם פרויקטים אמיתיים -
            אותם ניתן להוסיף לתיק העבודות שלנו. במהלך השנה נעבוד בצוותים המדמים
            צוותי פיתוח בתעשייה, נלמד איך ללמוד טכנולוגיות חדשות במהירות
            וביעילות ואיך להשתלב בצוותי פיתוח חדשים.
          </p>
          <p>
            סטודנט אשר נמצא במועדון הפיתוח, ילמד כיצד להשתמש בטכנולוגיות החדשות
            והפופולאריות ביותר שיש בשוק. הוא יקבל כלים שלא היה יכול לקבל בשום
            מקום אחר. הוא יבנה פרויקטים אמיתיים עם מנטור צמוד שיעזור לו בכל שלב
            בדרך. הוא יעבור מסטודנט - לתוכניתן.
          </p>
          <p>
            המועדון הוא מועדון אקסקלוסיבי - יש לנו מספר מוגבל של מקומות. כדי
            להצטרף למועדון צריך לעבור מיונים מקיפים. בסופו של יום, אנחנו רוצים
            שסטודנטים שיהיו אצלנו יצאו לשוק העבודה עם תיק עבודות מרשים, וכמובן,
            שהם יצאו מתכנתי על, ולא פחות מזה!
          </p>
        </div>
        <Button variant="contained" className={css["cta-btn"]} sx={btnStyle}>
          להרשמה לחצו כאן
        </Button>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 className={css["title"]}>פרוייקטי המועדון</h1>
        <div style={{display: 'flex', justifyContent:'center', gap: '3rem', margin: '0 0 1rem 0'}}>
          <Card {...card} />
          <Card {...card} />
          <Card {...card} />
        </div>
      </div>
    </section>
  );
};

export default index;
