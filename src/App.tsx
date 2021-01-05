import React from "react";
import { HomeView, ProductDetailView } from "./Views/index";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </div>
  );
}

export default App;
