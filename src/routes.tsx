import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardListPage from "./pages/CardListPage";
import CardDetailPage from "./pages/CardDetailPage";

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CardListPage />} />
      <Route path="/card/:id" element={<CardDetailPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
