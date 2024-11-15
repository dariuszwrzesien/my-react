import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";
import Page from "./layouts/Page";
import "./styles/App.css";
import { Grid2 } from "@mui/material";
import { Container } from "./App.styles";
import { routeList } from "./config";

function App() {
  return (
    <Container sx={{ width: "100%" }}>
      <Grid2 container spacing={1}>
        <Grid2 size={12}>
          <Header routeList={routeList} />
        </Grid2>
        <Grid2 size={2}>
          <Navigation routeList={routeList} />
        </Grid2>
        <Grid2 size={10}>
          <Page routeList={routeList} />
        </Grid2>
        <Grid2 size={12}>
          <Footer />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default App;
