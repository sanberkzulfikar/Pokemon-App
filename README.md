<p align="center">
  <img src="https://cdn.wallpaper.tn/large/Pokemon-Pikachu-Wallpapers-4K-171156.jpg" alt="Pokemon" width="300">
</p>

<h2 align="center">Pokémon TCG App</h2>

<p align="center">
  <a href="https://github.com/sanberkzulfikar/Pokemon-App">
    <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Status">
  </a>
  <a href="https://github.com/sanberkzulfikar/Pokemon-App">
    <img src="https://img.shields.io/badge/version-1.0.0-blue" alt="Version">
  </a>
</p>

---

Live Deploy Link: https://sanberk-pokemon.vercel.app/

## Features

- **Pokémon Cards List Screen**: Displays a list of Pokémon cards with their images and names. Supports infinite scrolling to load more cards.
- **Pokémon Card Detail Screen**: Displays detailed information for a selected Pokémon card, including type, HP, and abilities. Allows users to save or remove cards to/from local storage.

## Technologies Used

- React
- TypeScript
- React Query
- React Router
- Material-UI
- Axios
- Zustand
- Jest

## API Integration
The project leverages the Pokémon TCG API to fetch data. Below are the main endpoints used:

Get Pokémon Cards List
- Endpoint: https://api.pokemontcg.io/v2/cards
- Method: GET
- Parameters: page, pageSize
- page: The page number to retrieve.
- pageSize: The number of cards to retrieve per page.

Get Pokémon Card Details

- Endpoint: https://api.pokemontcg.io/v2/cards/{id}
- Method: GET

# Installation

- Clone repo
- npm install
- npm start
