import React, { useState, } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { styles } from "../styles/Styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, FormLabel } from "@mui/material";
import {useNavigate} from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [detailsError, setDetailsError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [category, setCatagory] = useState("");

  const navigate =  useNavigate() 

  const formSubmit = (e) => {
    setTitleError(false);
    setDetailsError(false);
    if (!title) {
      setTitleError(true);
    }
    if (!details) {
      setDetailsError(true);
    }
    e.preventDefault();
    if (title && details) {
      fetch('http://localhost:8000/notes',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify({title,details,category})
      }).then(()=>navigate('/'))
    }
  };

  return (
    <Container maxWidth="lg">
      {/* <Typography variant='h1' color="primary" align='center'>
        Hello H1
      </Typography> */}
      <Typography
        variant="h6"
        gutterBottom
        color="textSecondary"
        component="h1"
      >
        Create a New Note
      </Typography>
      <form
        noValidate
        autoComplete="off"
        style={{ marginTop: "60px" }}
        onSubmit={formSubmit}
      >
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={styles.field}
          variant="outlined"
          label="Note Title"
          fullWidth
          required
          style={{ marginBottom: "20px" }}
          error={titleError}
        />
        <TextField
          error={detailsError}
          onChange={(e) => setDetails(e.target.value)}
          className={styles.field}
          variant="outlined"
          multiline
          fullWidth
          label="Details"
          rows={4}
          style={{ marginBottom: "20px" }}
        />
        <FormControl>
          <FormLabel>Note Catagories</FormLabel>
          <RadioGroup
         
            value={category}
            onChange={(e) => setCatagory(e.target.value)}
          >
            <FormControlLabel control={<Radio />} label="Work" value="work" />
            <FormControlLabel
              control={<Radio />}
              label="Remainder"
              value="remainder"
            />
            <FormControlLabel control={<Radio />} label="Money" value="money" />
          </RadioGroup>
        <Button variant="contained" color="primary" type="submit">
          Add Note
        </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default Create;
