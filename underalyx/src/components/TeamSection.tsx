import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { pageText, teamMembers } from '../data/pageData';
import Grid from '@mui/material/Grid';

function TeamSection() {
  return (
    <Container maxWidth="xl" sx={{ pb: 4 }}>
      <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
        {teamMembers.map((member) => (
          <Grid key={member.name} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box component="img" src={member.avatar} alt={member.name} className="avatar" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {member.name}
                </Typography>
                <Typography sx={{ minHeight: 48 }}>
                  {member.role}
                </Typography>
                <Button variant="outlined" size="small" sx={{ mt: 2 }}>
                  {pageText.more}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TeamSection;
