import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./App.css";
import { CartContext } from "./context/CartContext";
import Cart from "./components/Cart/Cart";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer/Footer";

// Notification Services Context
import { NotificationServicesProvider } from "./services/notification/NotificationServices";

// Context
export const MyContext = React.createContext();

function App() {
  return (
    <>
      <NotificationServicesProvider>
        <CartContext>
          <BrowserRouter>
            <NavBar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/" element={<ItemListContainer />} />
                <Route path="/products/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </CartContext>
      </NotificationServicesProvider>
    </>
  );
}

export default App;
