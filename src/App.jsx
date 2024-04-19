import "./App.css";
import { UserForm } from "./components/UserForm/UserForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";

const theme = createTheme();
function App() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <UserForm />
      </Dialog>
    </ThemeProvider>
  );
}

export default App;
