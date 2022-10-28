import React, {useState} from 'react'
import { TextareaAutosize, Button, Snackbar, Alert, AlertTitle} from "@mui/material"

function About() {
    const [state, setState] = useState({
      open: false,
      vertical: "bottom",
      horizontal: "center",
    });
    const {open, vertical, horizontal} = state;
    const handleClick = () => {
      setState({...state, open: true});
    };

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      setState({...state, open: false});
    };

  return (
    <div>
      <h2>Write About You</h2>
      <TextareaAutosize
        aria-label="Tell us about you"
        placeholder="Tell use more about you..."
        style={{ width: 200 }}
      />
      <Button onClick={handleClick}>Click</Button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="info">
          <AlertTitle>Info</AlertTitle>
          <strong>Try dragging the textarea to resize it!</strong>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default About