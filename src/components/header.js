import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import Clock from 'react-live-clock';


function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

        return () => clearInterval(intervalId);
    }, []);

  return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/*  
              <MenuIcon />
              */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gerenciamento de Projetos
            </Typography>
            <Typography variant="body1">
              <Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Sao_Paulo'} />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Header;