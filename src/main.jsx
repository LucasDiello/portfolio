import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header.jsx";
import BackEnd from "./components/BackEnd.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { AnimatePresence } from "framer-motion";
import './lib/i18n.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: [
      <AnimatePresence mode='wait'>
      <Header />,
      <BackEnd />,
      <Contact />,
      <Footer />,
      </AnimatePresence>
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
