import {
  Dialog,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Button,
} from "@mui/material";

const Confirm = ({ values, prevStep, nextStep }) => {
  const { firstName, lastName, email, occupation, city, bio } = values;
  return (
    <>
      <Dialog open fullWidth maxWidth="sm">
        <AppBar title="Confirm User Data" />
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={bio} />
          </ListItem>
        </List>
        <br />

        <Button color="secondary" variant="contained" onClick={prevStep}>
          Back
        </Button>

        <Button color="primary" variant="contained" onClick={nextStep}>
          Confirm & Continue
        </Button>
      </Dialog>
    </>
  );
};

export default Confirm;
