import axios from "axios";

const API_URL = "https://api.pokemontcg.io/v2";

export const fetchCards = async (page: number, pageSize: number) => {
  const response = await axios.get(`${API_URL}/cards`, {
    params: { page, pageSize },
  });
  return response.data;
};

export const fetchCardById = async (id: string) => {
  const response = await axios.get(`${API_URL}/cards/${id}`);
  return response.data;
};
