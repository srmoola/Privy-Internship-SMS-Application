import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Error from "./routes/error";
import SignUp from "./routes/signup";
import MainPage from "./routes/mainpage";
import AllCustomers from "./components/AllCustomers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "app",
    element: <MainPage />,
  },
  {
    path: "customers",
    element: <AllCustomers />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
