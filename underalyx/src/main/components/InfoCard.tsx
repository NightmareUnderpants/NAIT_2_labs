import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type InfoCardProps = {
  image?: string;
  title: string;
  text: string;
  direction?: 'right' | 'left';
};

function InfoCard({ image, title, text, direction = "right" }: InfoCardProps) {
  return (
    <Card sx={{ height: '100%'}}>
      <Box sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: direction === 'right' ? 'row-reverse' : 'row',
          },
          height: '100%',
        }}>
        {image && <CardMedia component="img" image={image} alt={title} sx={{maxWidth: {md: '35%', xs: '100%'}, objectFit: 'cover'}}/>}
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography>{text}</Typography>
          <CardActions>
            <Button size="small">Подробнее</Button>
          </CardActions>
        </CardContent>
      </Box>
    </Card>
  );
}

export default InfoCard;
