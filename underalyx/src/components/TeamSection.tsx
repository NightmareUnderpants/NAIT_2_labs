import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { pageText, teamMembers } from '../data/pageData';

function TeamSection() {
  return (
    <Container maxWidth="lg" sx={{ pb: 4 }}>
      <Box className="team-grid">
        {teamMembers.map((member) => (
          <Card className="team-card" key={member.name}>
            <CardContent>
              <Box component="img" src={member.avatar} alt={member.name} className="avatar" />
              <Typography variant="h6" sx={{ mt: 2 }}>
                {member.name}
              </Typography>
              <Typography color="text.secondary" sx={{ minHeight: 48 }}>
                {member.role}
              </Typography>
              <Button variant="outlined" size="small" sx={{ mt: 2 }}>
                {pageText.more}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default TeamSection;
