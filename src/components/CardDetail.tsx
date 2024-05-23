import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCardById } from "../api/pokemon";
import { useCardStore } from "../store";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const CardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(
    ["card", id],
    () => fetchCardById(id as string),
    {
      enabled: !!id,
    }
  );
  const { savedCards, toggleSaveCard } = useCardStore();
  const isSaved = savedCards[id || ""];

  if (isLoading) return <div>Loading...</div>;
  if (!data || !data.data) return <div>No data available</div>;

  const card = data.data;

  return (
    <Card
      style={{
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
      }}
    >
      <CardMedia
        component="img"
        image={card.images.large}
        alt={card.name}
        style={{ maxHeight: "500px", objectFit: "contain" }}
      />
      <CardContent>
        <h4>{card.name}</h4>
        <Typography variant="body1" style={{ color: "#FFC96F" }}>
          Type: {card.types?.join(", ")}
        </Typography>
        <Typography variant="body1" style={{ color: "#FFA62F" }}>
          HP: {card.hp}
        </Typography>
        <Typography variant="body1" style={{ color: "#ACD793" }}>
          Abilities:{" "}
          {card.abilities
            ? card.abilities
                .map((ability: { name: string }) => ability.name)
                .join(", ")
            : "None"}
        </Typography>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#A91D3A",
            color: "#ffffff",
            margin: "10px",
          }}
          onClick={() => toggleSaveCard(id || "")}
        >
          {isSaved ? "Remove Card" : "Save Card"}
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#A91D3A",
            color: "#ffffff",
            margin: "10px",
          }}
          onClick={() => navigate("/")}
        >
          Return to Card List
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardDetail;
