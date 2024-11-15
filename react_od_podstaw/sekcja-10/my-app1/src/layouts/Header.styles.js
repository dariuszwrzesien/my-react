import { styled } from "@mui/material";

export const HeaderContainer = styled("div")(
  ({ theme, height, backgroundImage }) => ({
    padding: theme.spacing(2),
    backgroundImage,
    backgroundSize: "cover",
    backgroundColor: theme.palette.primary.main,
    height,
  })
);
