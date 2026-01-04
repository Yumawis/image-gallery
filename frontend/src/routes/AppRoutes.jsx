import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Collage from "../pages/Collage";

import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/collage" element={<Collage />} />
    </Routes>
  );
};

export default AppRoutes;
