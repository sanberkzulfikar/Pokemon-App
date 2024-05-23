import React from "react";
import CardList from "../components/CardList";

const CardListPage: React.FC = () => (
  <div>
    <h1
      style={{
        textAlign: "center",
        width: "100px",
        height: "100px",
        margin: "100px",
      }}
    >
      ClickRising Pokémon Cards
    </h1>
    <CardList />
  </div>
);

export default CardListPage;
