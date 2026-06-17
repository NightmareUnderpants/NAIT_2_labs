import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                mt: 4,
                py: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container maxWidth="xl">
                <Typography variant="body2" color="text.secondary" align="center">
                    Самые высокие здания и сооружения
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
