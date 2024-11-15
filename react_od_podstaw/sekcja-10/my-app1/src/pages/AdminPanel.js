import { Typography } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

const permission = false;

const Panel = () => {
  return (
    <Typography variant="h5" padding={2}>
      Panel admina
    </Typography>
  );
};

const AdminPanel = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={permission ? <Panel /> : <Navigate to={"/login"} />}
      />
    </Routes>
  );
};

export default AdminPanel;
