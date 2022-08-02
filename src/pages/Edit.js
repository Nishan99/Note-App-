import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { styles } from "../styles/Styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Alert, FormControl, FormLabel } from "@mui/material";
import {  useParams } from "react-router-dom";

const Edit = () => {
  
  const { id } = useParams();
  const [isLoad, setIsLoad] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [titleError, setTitleError] = useState(false);

  const [data, setData] = useState({
    title: "",
    details: "",
    category: "",
    id: "",
  });

  useEffect(() => {
    fetch(`http://localhost:8000/notes/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setData({
          title: data.title,
          details: data.details,
          category: data.category,
          id: data.id,
        })
      );
    setIsLoad(true);
  }, [id]);

  console.log(data);

  const formSubmit = (e) => {

    setTitleError(false);
    setDetailsError(false);
    if (!data.title) {
      setTitleError(true);
    }
    if (!data.details) {
      setDetailsError(true);
    }

    const complete=()=>{
      return (
        <Alert severity="error">This is an error alert — check it out!</Alert>
        )
        
      // navigate('/')
    }


    e.preventDefault()
    if (data.title && data.details) {
      fetch(`http://localhost:8000/notes/${id}`,{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{
          'Content-type':'application/json'
        },
       
      }).then(()=>complete())
    }

    console.log(data)
  };
  return (
    <>
      {isLoad && (
        <Container maxWidth="lg">
          <Typography
            variant="h6"
            gutterBottom
            color="textSecondary"
            component="h1"
          >
            Upadte a New Note
          </Typography>

          <form
            noValidate
            autoComplete="off"
            style={{ marginTop: "60px" }}
            onSubmit={formSubmit}
          >
            <TextField
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              className={styles.field}
              variant="outlined"
              multiline
              fullWidth
              label="Note Title"
              error={titleError}
              required
              style={{ marginBottom: "20px" }}
              // error={titleError}
            />
            <TextField
              value={data.details}
              onChange={(e) => setData({ ...data, details: e.target.value })}
              className={styles.field}
              variant="outlined"
              multiline
              fullWidth
              label="Details"
              required
              rows={4}
              style={{ marginBottom: "20px" }}
              // error={titleError}
              error={detailsError}
            />

            <FormControl>
              <FormLabel>Note Catagories</FormLabel>
              <RadioGroup
                
                onChange={(e) => setData({ ...data, category: e.target.value })}
              >
                <FormControlLabel
                  checked={data.category === "work"}
                  control={<Radio />}
                  label="Work"
                  value="work"
                  />
                <FormControlLabel
                  checked={data.category === "remainder"}
                  control={<Radio />}
                  label="Remainder"
                  value="remainder"
                />
                <FormControlLabel
                  checked={data.category === "money"}
                  control={<Radio />}
                  label="Money"
                  value="money"
                />
              </RadioGroup>
              <Button variant="contained" color="primary" type="submit">
                Add Note
              </Button>
            </FormControl>
          </form>
        </Container>
      )}
    </>
  );
};

export default Edit;
