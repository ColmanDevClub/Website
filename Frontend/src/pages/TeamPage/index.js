import React from "react";

import { useQuery } from "react-query";
import { Container, Typography } from "@mui/material";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

import css from "./style.module.css";
import CardList from "../../components/CardList";
import MemberCard from "../../components/MemberCard";

const fetchTeamMembers = async () => {
  const collectionRef = collection(db, "team");
  const querySnapshot = await getDocs(collectionRef);

  const fetchedCards = querySnapshot.docs.map((doc) => doc.data());
  return fetchedCards;
};

export default function TeamPage() {
  const { data: cards, isLoading } = useQuery("teamMembers", fetchTeamMembers);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: 700,
          letterSpacing: "4px",
          paddingTop: "3rem",
        }}
      >
        <span className={css["text-yellow"]}>Our</span>Team
      </Typography>
      <Container
        maxWidth="lg"
        sx={{
          paddingBottom: "3rem",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <CardList cards={cards} CardComponent={MemberCard} />
      </Container>
    </>
  );
}
