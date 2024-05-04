import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Details() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Assuming './sections/two/view' is the correct path to your destination component
  };
  return (
      <div className='d-flex flex-column w-auto justify-content-center align-item-center m-3 p-3'>
        <TextField
          required
          id="standard-required"
          label="Name"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Project Name"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Project Description"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Developer Name"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Company Name"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Mobile Number"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="DOB"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Email"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          variant="standard"
        />
          <Button variant="contained" color="success" onClick={handleClick}>
        Submit !!
      </Button>
      </div>
  );
}
