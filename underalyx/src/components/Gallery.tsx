import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { galleryImages } from '../data/pageData';
import Grid from '@mui/material/Grid';

function Gallery() {
  return (
    <Container maxWidth="xl" sx={{ py: 4}}>
      <Grid container>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Box>
            <GalleryImage src={galleryImages[0]} />
            <GalleryImage src={galleryImages[1]} />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <Box>
            <GalleryImage src={galleryImages[2]} />
            <GalleryImage src={galleryImages[3]} />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <Box sx={{ height: '100%' }}>
            <GalleryImage src={galleryImages[4]} tall />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

interface GalleryImageProps {
  src: string;
  tall?: boolean;
}

function GalleryImage({ src, tall }: GalleryImageProps) {
  return (
    <Box
      component="img"
      src={src}
      sx={{
        display: 'block',
        width: '100%',
        height: tall ? '100%' : 'auto',
        aspectRatio: tall ? 'auto' : '16 / 9',
        objectFit: 'cover',
      }}
    />
  );
}

export default Gallery;
