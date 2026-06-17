import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { galleryImages } from '../data';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router';

function Gallery() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box>
            <GalleryImage src={galleryImages[0].image} id={0} />
            <GalleryImage src={galleryImages[1].image} id={1} />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box>
            <GalleryImage src={galleryImages[2].image} id={2} />
            <GalleryImage src={galleryImages[3].image} id={3} />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ height: '100%' }}>
            <GalleryImage src={galleryImages[4].image} id={4} tall />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

interface GalleryImageProps {
  src: string;
  id: number;
  tall?: boolean;
}

function GalleryImage({ src, id, tall }: GalleryImageProps) {
  return (
    <Link to={`/games/${id}`}>
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
    </Link>
  );
}

export default Gallery;
