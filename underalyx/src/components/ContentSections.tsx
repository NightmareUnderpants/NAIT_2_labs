import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { pageText } from '../data/pageData';
import InfoCard from './InfoCard';

function ContentSections() {
  return (
    <Container maxWidth="lg" sx={{ pb: 4 }}>
      <Box className="main-grid">
        <Card className="content-card">
          <Box className="feature-layout">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {pageText.keyTitle}
              </Typography>
              <Typography color="text.secondary">{pageText.keyText}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              image="/img/PERSEPTUAL_57_01.png"
              alt={pageText.keyTitle}
              className="content-image"
            />
          </Box>
        </Card>

        <Card className="content-card">
          <CardContent>
            <Typography variant="h5" sx={{ textAlign: 'center' }} gutterBottom>
              {pageText.historyTitle}
            </Typography>
            <Typography color="text.secondary">{pageText.historyText}</Typography>
          </CardContent>
        </Card>

        <Stack spacing={3}>
          <InfoCard
            image="/img/PERSEPTUAL_Art_Monster_1.jpg"
            title={pageText.dataTitle}
            text={pageText.dataText}
          />
          <InfoCard
            image="/img/PERSEPTUAL_57_03.png"
            title={pageText.futureTitle}
            text={pageText.futureText}
          />
        </Stack>
      </Box>
    </Container>
  );
}

export default ContentSections;
