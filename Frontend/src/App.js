import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>
    </>
  )
);
const App = () => {
  return (
    <>
        <RouterProvider router={router} />
        <Footer />
    </>
  );
};

export default App;
