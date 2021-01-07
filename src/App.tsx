import React, { useState } from "react";
import { HomeView, ProductDetailView } from "./Views/index";
import { Routes, Route } from "react-router-dom";
import { Header, SocialBox, CartDrawer } from "./Components";
import { Snackbar, Box } from "@material-ui/core";
import { AnimateSharedLayout } from "framer-motion";

function App() {
  const [isProductDetailPage, setIsProductDetailPage] = useState<boolean>(
    false
  );
  const [isCartOpen, setIsCartOpen] = useState<boolean>(true);

  const [isSnackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const cartHandler = () => {
    setIsCartOpen((p) => !p);
  };
  const handleSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };
  const openSnackbar = () => {
    setSnackbarOpen(true);
  };
  return (
    <div className="App">
      <Header
        isProductDetailPage={isProductDetailPage}
        cartHandler={cartHandler}
      />
      <CartDrawer isCartOpen={isCartOpen} onClose={cartHandler} />
      <Box className="layoutwrapper">
        <AnimateSharedLayout>
          <Routes>
            <Route
              path="/"
              element={<HomeView openSnackbar={openSnackbar} />}
            />
            <Route
              path="/product/:prodId/:colorId"
              element={
                <ProductDetailView
                  onProductDetailPage={() => setIsProductDetailPage((p) => !p)}
                  openSnackbar={openSnackbar}
                />
              }
            />
          </Routes>
        </AnimateSharedLayout>
      </Box>
      <SocialBox />
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbar}
        message="Item Added to cart."
      />
    </div>
  );
}

export default App;
