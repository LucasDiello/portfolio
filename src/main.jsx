import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./routes/Header.jsx";
import BackEnd from "./routes/BackEnd.jsx";
import Contact from "./routes/Contact.jsx";
import Footer from "./routes/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: [
      <Header />,
      <BackEnd />,
      <Contact />,
      <Footer />,
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
