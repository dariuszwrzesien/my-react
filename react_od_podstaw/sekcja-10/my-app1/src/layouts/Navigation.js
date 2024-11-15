import { List, ListItem } from "@mui/material";
import { Link } from "./Navigation.styles";

const Navigation = ({ routeList, ...props }) => {
  return (
    <nav>
      <List>
        {routeList.map((route) => (
          <ListItem key={route.name} disablePadding>
            <Link exact={route.exact} to={route.path}>
              {route.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};

export default Navigation;
