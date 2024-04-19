import "./Confirm.css";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";

export const Confirm = ({ values, nextStep, prevStep }) => {
  const continueHandler = (e) => {
    e.preventDefault();
    //Process your form to your backend API
    nextStep();
  };

  const backHandler = (e) => {
    e.preventDefault();
    prevStep();
  };

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
            Confirm User Data
          </Typography>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem
          sx={{
            textAlign: "center",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <ListItemText
            primaryTypographyProps={{ variant: "h6" }}
            secondaryTypographyProps={{ variant: "body3" }}
            primary="First Name"
            secondary={values.firstName}
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          />
        </ListItem>
        <ListItem
          sx={{
            textAlign: "center",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <ListItemText
            primaryTypographyProps={{ variant: "h6" }}
            secondaryTypographyProps={{ variant: "body3" }}
            primary="Last Name"
            secondary={values.lastName}
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          />
        </ListItem>
        <ListItem
          sx={{
            textAlign: "center",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <ListItemText
            primaryTypographyProps={{ variant: "h6" }}
            secondaryTypographyProps={{ variant: "body3" }}
            primary="Email"
            secondary={values.email}
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          />
        </ListItem>
        <ListItem
          sx={{
            textAlign: "center",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <ListItemText
            primaryTypographyProps={{ variant: "h6" }}
            secondaryTypographyProps={{ variant: "body3" }}
            primary="Occupation"
            secondary={values.occupation}
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          />
        </ListItem>
        <ListItem
          sx={{
            textAlign: "center",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <ListItemText
            primaryTypographyProps={{ variant: "h6" }}
            secondaryTypographyProps={{ variant: "body3" }}
            primary="City"
            secondary={values.city}
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          />
        </ListItem>
        <ListItem
          sx={{
            textAlign: "center",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <ListItemText
            primaryTypographyProps={{ variant: "h6" }}
            secondaryTypographyProps={{ variant: "body3" }}
            primary="Bio"
            secondary={values.bio}
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          />
        </ListItem>
      </List>
      <div className="buttons">
        <Button variant="contained" color="secondary" onClick={backHandler}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={continueHandler}>
          Confirm & Continue
        </Button>
      </div>
    </>
  );
};

Confirm.propTypes = {
  values: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
