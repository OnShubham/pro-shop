import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import HomeScreen from "./Screens/HomeScreen";
import ProductsScreen from "./Screens/ProductsScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="p-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductsScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
