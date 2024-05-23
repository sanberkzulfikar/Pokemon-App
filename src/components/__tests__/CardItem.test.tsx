import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CardItem from "../CardItem";

test("renders CardItem component", () => {
  const { getByText, getByAltText } = render(
    <Router>
      <CardItem
        id="xy7-54"
        name="Pikachu"
        imageUrl="https://images.pokemontcg.io/xy7/54.png"
      />
    </Router>
  );

  expect(getByText("Pikachu")).toBeInTheDocument();
  expect(getByAltText("Pikachu")).toBeInTheDocument();
});
