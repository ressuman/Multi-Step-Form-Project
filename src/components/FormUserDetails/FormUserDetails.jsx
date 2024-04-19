import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";

export const FormUserDetails = ({ values, handleChange, nextStep }) => {
  const continueHandler = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <AppBar position="static" sx={{ marginBottom: "30px" }}>
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
            Enter User Details
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField
        variant="standard"
        label="Enter Your First Name"
        onChange={handleChange("firstName")}
        value={values.firstName}
        margin="normal"
        fullWidth
        required
        sx={{
          "& input": {
            outline: "none",
            fontSize: "1rem",
            padding: "12px",
            transition: "all 0.3s ease",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.4)",
            "&:focus": {
              outline: "auto",
              fontSize: "1rem",
              padding: "13px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.6)",
            },
          },
          margin: "20px auto",
          maxWidth: "500px",
        }}
      />
      <TextField
        variant="standard"
        label="Enter Your Last Name"
        onChange={handleChange("lastName")}
        value={values.lastName}
        margin="normal"
        fullWidth
        required
        sx={{
          "& input": {
            outline: "none",
            fontSize: "1rem",
            padding: "12px",
            transition: "all 0.3s ease",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.4)",
            "&:focus": {
              outline: "auto",
              fontSize: "1rem",
              padding: "13px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.6)",
            },
          },
          margin: "20px auto",
          maxWidth: "500px",
        }}
      />
      <TextField
        variant="standard"
        label="Enter Your Email"
        onChange={handleChange("email")}
        value={values.email}
        margin="normal"
        fullWidth
        required
        sx={{
          "& input": {
            outline: "none",
            fontSize: "1rem",
            padding: "12px",
            transition: "all 0.3s ease",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.4)",
            "&:focus": {
              outline: "auto",
              fontSize: "1rem",
              padding: "13px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.6)",
            },
          },
          margin: "20px auto",
          maxWidth: "500px",
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={continueHandler}
        sx={{ mx: "auto", mt: 2, mb: 8, display: "block" }}
      >
        Continue
      </Button>
    </>
  );
};

FormUserDetails.propTypes = {
  values: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
