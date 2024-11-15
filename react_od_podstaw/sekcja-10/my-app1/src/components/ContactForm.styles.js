import { Button, styled, TextareaAutosize } from "@mui/material";

export const Textarea = styled(TextareaAutosize)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  width: "300px",
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  width: "335px",
  marginLeft: theme.spacing(2),
  border: 1,
  borderColor: theme.palette.primary.main,
  borderStyle: "solid",
}));
