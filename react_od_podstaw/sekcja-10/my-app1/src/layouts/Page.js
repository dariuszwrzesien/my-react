import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

const Page = ({ routeList, ...props }) => {
  return (
    <Routes>
      {routeList.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          exact={route.exact}
          element={route.component}
        />
      ))}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Page;
