import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const menuItemSx = {
  '&:hover': {
    bgcolor: 'rgba(41, 182, 246, 0.16)',
  },
};

const pages = [
  { id: '1', label: 'Главная' },
  { id: '2', label: 'Таблица' },
  { id: '3', label: 'Список игр' },
  { id: '4', label: 'Партнеры' },
];

interface ComponentProps {
  active: string;
}

function Navbar({ active }: ComponentProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const buttonVariant = (page: string) => (active === page ? 'contained' : 'text');
  const drawerItemSx = (page: string) =>
    active === page ? { ...menuItemSx, bgcolor: 'info.main', color: 'info.contrastText' } : menuItemSx;

  return (
    <AppBar position="static" sx={{ boxShadow: 0, bgcolor: '#1f2933' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ flexShrink: 0, fontWeight: 700 }}>
            PERSEPTUAL
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, flexGrow: 1 }}>
            {pages.map((page) => (
              <Button key={page.id} variant={buttonVariant(page.id)} color="info">
                {page.label}
              </Button>
            ))}
          </Box>

          <Box component="form" sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <TextField
              size="small"
              placeholder="Поиск..."
              variant="outlined"
              sx={{ bgcolor: 'background.paper', borderRadius: 1 }}
            />
            <Button variant="outlined" color="inherit">
              Найти
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <IconButton aria-label="Открыть меню" onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon />
            </IconButton>

            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                  <IconButton aria-label="Закрыть меню" onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuList>
                  {pages.map((page) => (
                    <MenuItem key={page.id} sx={drawerItemSx(page.id)}>
                      {page.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
