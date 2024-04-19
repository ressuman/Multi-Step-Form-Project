import "./FormPersonalDetails.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";

export const FormPersonalDetails = ({
  values,
  handleChange,
  nextStep,
  prevStep,
}) => {
  const continueHandler = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backHandler = (e) => {
    e.preventDefault();
    prevStep();
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
            Enter Personal Details
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField
        variant="standard"
        label="Enter Your Occupation"
        onChange={handleChange("occupation")}
        value={values.occupation}
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
        label="Enter Your City"
        onChange={handleChange("city")}
        value={values.city}
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
        label="Enter Your Bio"
        onChange={handleChange("bio")}
        value={values.bio}
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
      <div className="buttons">
        <Button variant="contained" color="secondary" onClick={backHandler}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={continueHandler}>
          Continue
        </Button>
      </div>
    </>
  );
};

FormPersonalDetails.propTypes = {
  values: PropTypes.shape({
    occupation: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
