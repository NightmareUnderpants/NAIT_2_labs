import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { galleryImages } from "../main/data";

function Description() {
  const { id } = useParams();
  const games = galleryImages[id ? parseInt(id) : 0];

  return (
    <div>
      <Navbar active="1" />
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Grid container spacing={ 2 } sx={{ flexDirection: "column", alignItems: "center" }}>
          <Typography sx={{ alignSelf: "flex-start", width: "100%"}}>
            <Button component={Link} to="/">
              Главная
            </Button>
            {`> ${games.title}`}
          </Typography>

          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            {games.title}
          </Typography>

          <Typography variant="subtitle1" gutterBottom sx={{ textAlign: "center" }}>
            {games.genre}
          </Typography>

          <Box
            component="img"
            src={games.image}
            alt={games.title}
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", md: 760 },
              height: { sm: 340, md: 400 },
              borderRadius: "8px",
              mb: 2.5,
              objectFit: "cover",
            }}
          />

          <Grid container spacing={3}>
            {games.description.map((item, index) => (
              <Grid key={index} size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Description;
