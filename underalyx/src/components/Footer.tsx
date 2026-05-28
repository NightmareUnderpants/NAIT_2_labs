import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { pageText } from '../data/pageData';

function Footer() {
  return (
    <Box component="footer" sx={{ pb: 5 }}>
      <Container maxWidth="md">
        <Typography variant="h5" sx={{ textAlign: 'center' }} gutterBottom>
          {pageText.about}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
          {pageText.author}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="outlined" href="mailto:contact@perseptual.org">
            {pageText.mail}
          </Button>
          <Button variant="outlined" href="/">
            Discord
          </Button>
          <Button variant="outlined" href="/">
            Telegram channel
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
