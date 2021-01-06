import React from "react";
import { HomeView, ProductDetailView } from "./Views/index";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components";
import { Box } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Header />
      <Box className="layoutwrapper">
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
