import { Route, Routes } from "react-router-dom";
import { HeaderContainer } from "./Header.styles";

const Header = ({ routeList, ...props }) => {
  console.log(routeList);
  return (
    <Routes>
      {routeList.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          exact={route.exact}
          element={
            <HeaderContainer
              height="30vh"
              backgroundImage={`url(./images/${route.background})`}
            ></HeaderContainer>
          }
        />
      ))}
      <Route
        path="*"
        element={
          <HeaderContainer
            height="30vh"
            backgroundImage={`url(./images/404.jpg)`}
          ></HeaderContainer>
        }
      />
    </Routes>
  );
};
export default Header;
