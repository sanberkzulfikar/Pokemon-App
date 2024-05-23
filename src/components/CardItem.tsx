import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

interface CardItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

const CardItem: React.FC<CardItemProps> = ({ id, name, imageUrl }) => (
  <Link to={`/card/${id}`} style={{ textDecoration: "none" }}>
    <Card
      style={{
        maxWidth: "300px",
        margin: "auto",
        textAlign: "center",
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        padding: "10px",
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={name}
        style={{ maxHeight: "400px", objectFit: "contain" }}
      />
      <CardContent>
        <h5 style={{ textAlign: "center" }}>{name}</h5>
      </CardContent>
    </Card>
  </Link>
);

export default CardItem;
