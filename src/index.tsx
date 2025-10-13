import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./screens/Home/Home";
import { Shop } from "./screens/Shop";
import { MobileApp } from "./screens/MobileApp";
import { Reviews } from "./screens/Reviews";
import { Contact } from "./screens/Contact";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="mobile-app" element={<MobileApp />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
