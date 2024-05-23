import create from "zustand";

interface CardState {
  savedCards: { [key: string]: boolean };
  toggleSaveCard: (id: string) => void;
}

const loadSavedCards = (): { [key: string]: boolean } => {
  const saved = localStorage.getItem("savedCards");
  return saved ? JSON.parse(saved) : {};
};

const saveCardsToLocalStorage = (cards: { [key: string]: boolean }) => {
  localStorage.setItem("savedCards", JSON.stringify(cards));
};

export const useCardStore = create<CardState>((set) => ({
  savedCards: loadSavedCards(),
  toggleSaveCard: (id) =>
    set((state) => {
      const newSavedCards = {
        ...state.savedCards,
        [id]: !state.savedCards[id],
      };
      saveCardsToLocalStorage(newSavedCards);
      return { savedCards: newSavedCards };
    }),
}));
