import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Grid} from "@mui/material";

import Button from "../../components/common/Button";

import { btnStyle } from "../../generic/CustomStyle";

import CardList from "../../components/CardList";

import css from "./style.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const card = {
    image_url: `https://picsum.photos/200`,
    title: `כותרת`,
    description: `תיאור הפרוייקט`,
    github_url: `https://www.github.com`,
    website_url: `https://www.google.com`,
  };

  return (
    <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <Container maxWidth="lg">
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
              אנו ניקח את הכלים שאנחנו לומדים בתואר וניצור איתם פרויקטים אמיתיים
              - אותם ניתן להוסיף לתיק העבודות שלנו. במהלך השנה נעבוד בצוותים
              המדמים צוותי פיתוח בתעשייה, נלמד איך ללמוד טכנולוגיות חדשות
              במהירות וביעילות ואיך להשתלב בצוותי פיתוח חדשים.
            </p>
            <p>
              סטודנט אשר נמצא במועדון הפיתוח, ילמד כיצד להשתמש בטכנולוגיות
              החדשות והפופולאריות ביותר שיש בשוק. הוא יקבל כלים שלא היה יכול
              לקבל בשום מקום אחר. הוא יבנה פרויקטים אמיתיים עם מנטור צמוד שיעזור
              לו בכל שלב בדרך. הוא יעבור מסטודנט - למתכנת.
            </p>
            <p>
              המועדון הוא מועדון אקסקלוסיבי - יש לנו מספר מוגבל של מקומות. כדי
              להצטרף למועדון צריך לעבור מיונים מקיפים. בסופו של יום, אנחנו רוצים
              שסטודנטים שיהיו אצלנו יצאו לשוק העבודה עם תיק עבודות מרשים,
              וכמובן, שהם יצאו מתכנתי על, ולא פחות מזה!
            </p>
          </div>

          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid xs={12} md={6} lg={4}>
              <Link
                to="/Signup"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button
                  variant="contained"
                  className={css["cta-btn"]}
                  sx={btnStyle}
                >
                  להרשמה לחצו כאן
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>

      <Container maxWidth="xl">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 className={css["title"]}>פרוייקטי המועדון</h1>
          {/*After using Firebase, we just need to fetch all the project into array and send to the cardlist. */}
          <CardList cards={[card, card, card]} />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
