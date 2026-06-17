import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {Link} from 'react-router-dom'; 

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
}));

const menuItemSx = {
    '&:hover': {
        bgcolor: 'rgba(41, 182, 246, 0.16)',
    },
};

interface ComponentProps {
    active: string;
}

function Navbar({ active } : ComponentProps) {
    const [open, setOpen] = React.useState(false);
    
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const buttonVariant = (page: string) => active === page ? 'contained' : 'text';
    const drawerItemSx = (page: string) => active === page
        ? { ...menuItemSx, bgcolor: 'info.main', color: 'info.contrastText' }
        : menuItemSx;

    return (
        <AppBar
            position="static"
            sx={{
            boxShadow: 0,
            bgcolor: 'transparent',
            mt: '28px',
            }}
        >
            <Container maxWidth="xl">
                <StyledToolbar>
                    <Typography variant="h6" sx={{ color: '#5d8aa8' }}>
                        Самые высокие здания и сооружения
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        <Link to="/">
                            <Button variant={buttonVariant('1')} color="info" size="medium">
                                Главная
                            </Button>
                        </Link>

                        <Link to="/list">
                            <Button variant={buttonVariant('2')} color="info" size="medium">
                                Список зданий
                            </Button>
                        </Link>

                        <Link to="/chart">
                            <Button variant={buttonVariant('3')} color="info" size="medium">
                                Диаграммы
                            </Button>
                        </Link>

                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>

                        <Drawer anchor="top" open={ open } onClose={toggleDrawer(false)}>
                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                <MenuList>

                                    <MenuItem component={Link} to="/" sx={drawerItemSx('1')} onClick={toggleDrawer(false)}>
                                        Главная
                                    </MenuItem>

                                    <MenuItem component={Link} to="/list" sx={drawerItemSx('2')} onClick={toggleDrawer(false)}>
                                        Список зданий
                                    </MenuItem>

                                    <MenuItem component={Link} to="/chart" sx={drawerItemSx('3')} onClick={toggleDrawer(false)}>
                                        Диаграммы
                                    </MenuItem>

                                </MenuList>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
