import { Dialog, AppBar, TextField, Button } from "@mui/material";

const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
  return (
    <>
      <Dialog open fullWidth maxWidth="sm">
        <AppBar title="Enter Personal Details" />
        <TextField
          placeholder="Enter Your Occupation"
          label="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Enter Your City"
          label="City"
          onChange={handleChange("city")}
          defaultValue={values.city}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Enter Your Bio"
          label="Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
          margin="normal"
          fullWidth
        />
        <br />

        <Button color="secondary" variant="contained" onClick={prevStep}>
          Back
        </Button>

        <Button color="primary" variant="contained" onClick={nextStep}>
          Continue
        </Button>
      </Dialog>
    </>
  );
};

export default FormPersonalDetails;
