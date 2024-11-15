import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)(({ theme }) => ({
  width: "80%",
  padding: theme.spacing(2),
  color: theme.palette.primary.main,
  textDecoration: "none",
  transition: "all 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.background.default,
  },
  "&.active": {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.secondary.main,
  },
}));
