import { Grid, ImageListItem, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Photo from "../../assets/ef1b7b898f8d650f0ecdcb6ad5b9baea.png";
import EntranceAnimation from "../../components/EntranceAnimation";
import LangCard from "../../components/LangCard";
import { typesCards } from "../../components/LangCard/data";
import Button from "../../components/common/Button";
import css from "./style.module.css";

const SectionOne = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      gridTemplateColumns={"5fr 1fr"}
      py={{ xs: 1, md: 4 }}
      px={{ xs: 2, lg: 10 }}
      spacing={{ xs: 0, lg: 2 }}
      alignItems={"center"}
    >
      <Grid item xs={12} md={6} lg={6}>
        <ImageListItem
          sx={{
            width: { md: "80%", lg: "95%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={Photo}
            className={css["photo"]}
            alt="programmers"
            loading="lazy"
          ></img>
        </ImageListItem>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Stack
          paddingLeft={{ xs: 0, lg: 5 }}
          alignItems={{ xs: "center", lg: "flex-end" }}
          paddingBottom={{ xs: 10 }}
        >
          <Typography
            fontSize={{ xs: "3rem", md: "5rem", lg: "6rem" }}
            fontWeight={900}
            textAlign={{ xs: "center", md: "end" }}
          >
            מועדון <span className={css["text-yellow"]}>מפתח</span>ים/ות
          </Typography>
          <Typography
            textAlign={{ xs: "center", md: "end" }}
            fontSize={{ xs: "1rem", md: "1.1rem", lg: "1.2rem" }}
          >
            ללמוד לפתח זה דבר אחד - לממש את הלמידה זה משהו אחר לגמרי. כדי לפתח
            טוב, צריך להתאמץ ולא להפסיק לכתוב ולהכיר את הטכנולוגיות הכי חדישות
            ומתקדמות בשוק. זה מה שאנחנו שואפים אליו במועדון הפיתוח של המכללה
            למינהל. אנחנו לוקחים את הידע שלנו, ומנסים לדחוף אותו שלב אחד קדימה
            ולממש אותו.
          </Typography>
          <Button variant="contained" onClick={() => navigate("/Signup")}>
            להרשמה לחצו כאן
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Grid container gap={{ xs: 2, md: 4 }} justifyContent={"center"}>
          {typesCards.map((card, index) => {
            return (
              <Grid item xs={12} md={3} lg={2}>
                <EntranceAnimation animationDelay={index * 0.2}>
                  <LangCard {...card} />
                </EntranceAnimation>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SectionOne;
