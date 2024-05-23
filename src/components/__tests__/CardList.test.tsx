import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import CardList from "../CardList";
import { fetchCards } from "../../api/pokemon";

const queryClient = new QueryClient();

jest.mock("../../api/pokemon", () => ({
  fetchCards: jest.fn(),
}));

const mockFetchCards = fetchCards as jest.Mock;

const mockCards = {
  pages: [
    {
      data: [
        {
          id: "xy7-54",
          name: "Pikachu",
          images: { small: "https://images.pokemontcg.io/xy7/54.png" },
        },
        {
          id: "sm1-1",
          name: "Bulbasaur",
          images: { small: "https://images.pokemontcg.io/sm1/1.png" },
        },
      ],
      total: 2, // Add a total property
    },
  ],
};

test("renders CardList component", async () => {
  mockFetchCards.mockResolvedValueOnce(mockCards);

  render(
    <QueryClientProvider client={queryClient}>
      <CardList />
    </QueryClientProvider>
  );

  await waitFor(() => {
    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
  });
});
