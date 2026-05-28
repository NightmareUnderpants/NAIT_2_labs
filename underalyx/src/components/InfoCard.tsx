import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type InfoCardProps = {
  image: string;
  title: string;
  text: string;
};

function InfoCard({ image, title, text }: InfoCardProps) {
  return (
    <Card className="content-card">
      <Box className="info-card-layout">
        <CardMedia component="img" image={image} alt={title} className="side-image" />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography color="text.secondary">{text}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default InfoCard;
