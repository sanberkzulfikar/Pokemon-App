import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import CardDetail from "../CardDetail";
import { useCardStore } from "../../store";

const queryClient = new QueryClient();

jest.mock("../../store", () => ({
  useCardStore: jest.fn(),
}));

const mockUseCardStore = useCardStore as unknown as jest.Mock;

const mockCard = {
  data: {
    id: "xy7-54",
    name: "Pikachu",
    images: {
      large: "https://images.pokemontcg.io/xy7/54.png",
    },
    types: ["Electric"],
    hp: "60",
    abilities: [{ name: "Static" }],
  },
};

jest.mock("../../api/pokemon", () => ({
  fetchCardById: jest.fn(() => Promise.resolve(mockCard)),
}));

test("renders CardDetail component", async () => {
  mockUseCardStore.mockReturnValue({
    savedCards: { "xy7-54": true },
    toggleSaveCard: jest.fn(),
  });

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={["/card/xy7-54"]}>
        <Routes>
          <Route path="/card/:id" element={<CardDetail />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );

  await waitFor(() => {
    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Type: Electric")).toBeInTheDocument();
    expect(screen.getByText("HP: 60")).toBeInTheDocument();
    expect(screen.getByText("Abilities: Static")).toBeInTheDocument();
  });
});
