import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { galleryImages } from '../data/pageData';

function Gallery() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box className="image-gallery">
        {galleryImages.map((src, index) => (
          <Box
            key={src}
            component="img"
            src={src}
            alt={`PERSEPTUAL ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </Box>
    </Container>
  );
}

export default Gallery;
