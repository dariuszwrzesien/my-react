import { Paper, styled } from "@mui/material";

export const Container = styled(Paper)(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
}));
