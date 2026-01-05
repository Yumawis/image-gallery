import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Collage from "../pages/Collage";

import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route element={<MainLayout />}>
        <Route path="/collage" element={<Collage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
