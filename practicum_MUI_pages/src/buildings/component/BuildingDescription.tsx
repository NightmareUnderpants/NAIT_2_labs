import { Box, Container, Grid, Typography, Button } from "@mui/material";
import structures from "../../data";
import { Link } from "react-router-dom";

interface BuildingDescriptionProps {
  id: number;
}

function BuildingDescription({ id }: BuildingDescriptionProps) {
  const building = structures[id];

  if (!building) {
    return (
      <Container maxWidth="lg" sx={{ mt: '20px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Здание не найдено
        </Typography>
      </Container>
    );
  }

  return (
      <Container maxWidth="lg" sx={{ mt: '20px' }}>
          <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography sx={{ alignSelf: 'flex-start', width: '100%' }}>
                <Link to="../">
                  <Button>
                    Главная
                  </Button>
                </Link>
                {`> ${building.title}`}
              </Typography>
              <Typography variant="h4" component="h1" gutterBottom>
                  {building.title}
              </Typography>
              <Box component={"img"}
                src={building.img}
                alt={building.title}
                width={400}
                height={400}
                style={{ borderRadius: '8px', marginBottom: '20px', objectFit: 'cover' }}
              />
              <Grid container spacing={2}>
                {building.description.map((item, index) => (
                  <Grid key={index} size={{ sm: 12, md: 6 }}>
                    <Typography variant="body1" gutterBottom>
                      {item}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
          </Grid>
      </Container>
  );
}

export default BuildingDescription;
