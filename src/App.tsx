import React, { useState } from "react";
import { HomeView, ProductDetailView } from "./Views/index";
import { Routes, Route } from "react-router-dom";
import { Header, SocialBox, CartDrawer } from "./Components";
import { Box } from "@material-ui/core";
import { AnimateSharedLayout } from "framer-motion";
function App() {
  const [isProductDetailPage, setIsProductDetailPage] = useState<boolean>(
    false
  );
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const cartHandler = () => {
    setIsCartOpen((p) => !p);
  };
  return (
    <div className="App">
      <Header
        isProductDetailPage={isProductDetailPage}
        cartHandler={cartHandler}
      />
      <CartDrawer isCartOpen={isCartOpen} onClose={cartHandler} />
      <Box className="layoutwrapper">
        <AnimateSharedLayout type="crossfade">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route
              path="/product/:prodId/:colorId"
              element={
                <ProductDetailView
                  onProductDetailPage={() => setIsProductDetailPage((p) => !p)}
                />
              }
            />
          </Routes>
        </AnimateSharedLayout>
      </Box>
      <SocialBox />
    </div>
  );
}

export default App;
