import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { pageText } from '../main/data';

function Footer() {
  return (
    <Box component="footer" sx={{ pb: 5 }}>
      <Container maxWidth="md">
        <Typography variant="h5" sx={{ textAlign: 'center' }} gutterBottom>
          {pageText.about}
        </Typography>
        <Typography sx={{ mb: 2, textAlign: 'center' }}>
          {pageText.author}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
