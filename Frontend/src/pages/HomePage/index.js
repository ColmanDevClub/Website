import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { Container, Grid } from "@mui/material";

import Button from "../../components/common/Button";
import CardList from "../../components/CardList";
import Loader from "../../components/common/Loader";

import { fetchData } from "../../firebase/firebase-utils";
import { btnStyle } from "../../generic/CustomStyle";

import css from "./style.module.css";
import EntranceAnimation from "../../components/EntranceAnimation";
import SplashAnimation from "../../components/SplashAnimation";

const HomePage = () => {
  const { data: cards, isLoading } = useQuery("projects", () =>
    fetchData("projects")
  );

  const navigate = useNavigate();

  return (
    <EntranceAnimation>
      <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <Container maxWidth="md">
          <div
            className={css["hero"]}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h1 className={css["title"]}>מועדון מפתחים/ות</h1>
            <div className={css["content"]}>
              <p>
                ללמוד לפתח זה דבר אחד - לממש את הלמידה זה משהו אחר לגמרי. כדי
                לפתח טוב, צריך להתאמץ ולא להפסיק לכתוב ולהכיר את הטכנולוגיות הכי
                חדישות ומתקדמות בשוק. זה מה שאנחנו שואפים אליו במועדון הפיתוח של
                המכללה למינהל. אנחנו לוקחים את הידע שלנו, ומנסים לדחוף אותו שלב
                אחד קדימה ולממש אותו.
              </p>
            </div>

            <img src="/programmers1.png" className={css["programmers-img"]} alt="programmers"></img>

            <SplashAnimation>
              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Grid xs={12} md={6} lg={4}>
                  <Button
                    variant="contained"
                    className={css["cta-btn"]}
                    sx={btnStyle}
                    onClick={() => navigate("/Signup")}
                  >
                    להרשמה לחצו כאן
                  </Button>
                </Grid>
              </Grid>
            </SplashAnimation>
          </div>
        </Container>

        <div className={css["additional-content"]}>
          <SplashAnimation>
            <Container maxWidth="md">
              <h2 className={css["subtitle"]}>מה עושים במועדון?</h2>
              <p>
                אנו ניקח את הכלים שאנחנו לומדים בתואר וניצור איתם פרויקטים
                אמיתיים - אותם ניתן להוסיף לתיק העבודות שלנו. במהלך השנה נעבוד
                בצוותים המדמים צוותי פיתוח בתעשייה, נלמד איך ללמוד טכנולוגיות
                חדשות במהירות וביעילות ואיך להשתלב בצוותי פיתוח חדשים.
              </p>
              <p>
                סטודנט אשר נמצא במועדון הפיתוח, ילמד כיצד להשתמש בטכנולוגיות
                החדשות והפופולאריות ביותר שיש בשוק. הוא יקבל כלים שלא היה יכול
                לקבל בשום מקום אחר. הוא יבנה פרויקטים אמיתיים עם מנטור צמוד
                שיעזור לו בכל שלב בדרך. הוא יעבור מסטודנט - למתכנת.
              </p>
            </Container>
          </SplashAnimation>
        </div>

        <div className={css["content"]}>
          <SplashAnimation>
            <Container maxWidth="sm">
              <h2 className={css["subtitle"]}>איך מתקבלים?</h2>
              <p>
                המועדון הוא מועדון אקסקלוסיבי - יש לנו מספר מוגבל של מקומות. כדי
                להצטרף למועדון צריך לעבור מיונים מקיפים. בסופו של יום, אנחנו
                רוצים שסטודנטים שיהיו אצלנו יצאו לשוק העבודה עם תיק עבודות
                מרשים, וכמובן, שהם יצאו מתכנתי על, ולא פחות מזה!
              </p>
            </Container>
          </SplashAnimation>
        </div>

        <Container maxWidth="xl">
          <div style={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}>
            <h1 className={css["title"]}>פרוייקטי המועדון</h1>
            <Loader isLoading={isLoading}>
              <CardList cards={cards} />
            </Loader>
            {/* {isLoading ? (
            <Typography sx={{ textAlign: "center" }}>Loading..</Typography>
          ) : (
            <CardList cards={cards} />
          )} */}
          </div>
        </Container>
      </div>
    </EntranceAnimation>
  );
};

export default HomePage;
