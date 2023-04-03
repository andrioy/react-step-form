import { Dialog, AppBar, TextField, Button } from "@mui/material";

const FormUserDetails = ({ values, handleChange, nextStep }) => {
  return (
    <>
      <Dialog open fullWidth maxWidth="sm">
        <AppBar title="Enter User Details" />
        <TextField
          placeholder="Enter Your First Name"
          label="First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Enter Your Last Name"
          label="Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Enter Your Email"
          label="Email"
          onChange={handleChange("email")}
          defaultValue={values.email}
          margin="normal"
          fullWidth
        />
        <br />
        <Button color="primary" variant="contained" onClick={nextStep}>
          Continue
        </Button>
      </Dialog>
    </>
  );
};

export default FormUserDetails;
