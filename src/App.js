import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import { unstable_createMuiStrictModeTheme } from "@mui/material";
import { createTheme } from "@mui/material";
import React from "react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9c27b0',
    },
    secondary: {
      main: '#af52bf',
    },
  },
})


function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <ListarTarefa />
        </div>
        <CssBaseline />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;