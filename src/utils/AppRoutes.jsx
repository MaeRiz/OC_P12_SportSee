import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import InProgress from "../pages/InProgress";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InProgress />} />
      <Route path="/user/:userId" element={<Dashboard />} />
      <Route path="/settings" element={<InProgress />} />
      <Route path="/community" element={<InProgress />} />
      <Route path="/profil" element={<InProgress />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
