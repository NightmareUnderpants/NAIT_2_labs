import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { pageText } from '../data';
import InfoCard from './InfoCard';
import Grid from '@mui/material/Grid';

function Content() {
  return (
    <Container maxWidth="xl" sx={{ pb: 4}}>
        <Grid container spacing={{ xs: 1, md: 3 }}>
            <Grid size={{ xs: 12, md: 4 }} >
                <InfoCard
                    image={'/img/PERSEPTUAL_57_01.png'}
                    title={pageText.keyTitle}
                    text={pageText.keyText}
                    direction='left'
                />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} >
                <InfoCard
                    title={pageText.historyTitle}
                    text={pageText.historyText}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
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
                </Box>
            </Grid>
        </Grid>
    </Container>
  );
}

export default Content;
