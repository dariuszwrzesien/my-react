import { styled, Typography } from "@mui/material";

export const ArticleContainer = styled("article")(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

export const Title = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.primary.main,
}));

export const Date = styled(Typography)(({ theme }) => ({
  color: "grey",
  fontSize: "0.8rem",
  paddingRight: theme.spacing(2),
}));

export const Content = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
}));
