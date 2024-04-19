import "./Success.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";

export const Success = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ marginBottom: "30px" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" align="center" sx={{ flexGrow: 1 }}>
            Success
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="success-text">
        <Typography align="center" sx={{ fontSize: "2rem" }} variant="h4">
          Thank You For Your Submission
        </Typography>
        <Typography align="center" sx={{ fontSize: "1rem" }} variant="body1">
          You will receive an email with further instructions.
        </Typography>
      </div>
    </>
  );
};
