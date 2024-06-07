import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import { Button, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';

export const UserForm = () => {

  const [inputs, setInputs] = useState({})
  const [open, setOpen] = React.useState(false);

  const changeHandler = (event) => {
    const { name, value, type, checked, states } = event.target;
    const newValue = type === 'radio' ? value : value;
    setInputs(values => ({ ...values, [name]: newValue }));
  };

  const submitHandler = event => {
    event.preventDefault()
    setOpen(true);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const resetHandler = event => {
    event.preventDefault();
    setInputs({});
  }


  return (
    <div>
      <div>
        <h2>User Form</h2>
        <Snackbar open={open} autoHideDuration={700} onClose={handleClose} message="Form submitted successfully" />
      </div>
      <form method='post' onSubmit={submitHandler}>
        <fieldset>
          <legend>Personal Info</legend>
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: 30 }}>
              <InputLabel htmlFor='fname'>First Name</InputLabel>
              <TextField name='fname' id='fname' onChange={changeHandler} value={inputs.fname || ''} type='text' required />
            </div>
            <div style={{ marginLeft: 30 }}>
              <InputLabel htmlFor='mname'>Middle Name</InputLabel>
              <TextField name='mname' id='mname' onChange={changeHandler} value={inputs.mname || ''} type='text' />
            </div>
            <div style={{ marginLeft: 30 }}>
              <InputLabel htmlFor='lname'>Last Name</InputLabel>
              <TextField name='lname' id='lname' onChange={changeHandler} value={inputs.lname || ''} type='text' required />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Gender</legend>
          <RadioGroup>
            <div style={{ display: 'flex', marginLeft: 30 }}>
              <FormControlLabel value='male' control={<Radio />} label='Male' />
              <FormControlLabel value='female' control={<Radio />} label='Female' />
              <FormControlLabel value='others' control={<Radio />} label='Others' />
              <FormControlLabel value='na' control={<Radio />} label='Prefer not to specify' />
            </div>
          </RadioGroup>
        </fieldset>
        <fieldset>
          <legend>Contact Info</legend>
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: 30 }}>
              <InputLabel htmlFor='dob'>Date of Birth</InputLabel>
              <TextField name='dob' id='dob' onChange={changeHandler} value={inputs.dob || ''} type='date' maxLength={10} required />
            </div>
            <div style={{ marginLeft: 30 }}>
              <InputLabel htmlFor='phno'>Phone No.</InputLabel>
              <TextField name='phno' id='phno' onChange={changeHandler} value={inputs.phno || ''} type='number' maxLength={10} required />
            </div>
            <div style={{ marginLeft: 30 }}>
              <InputLabel htmlFor='email'>Email address</InputLabel>
              <TextField name='email' id='email' onChange={changeHandler} value={inputs.email || ''} type='email' required />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Residential Address</legend>
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: 30 }}>
              <InputLabel htmlFor='house'>House/Flat No.and Name </InputLabel>
              <TextField name='house' id='house' onChange={changeHandler} value={inputs.house || ''} type='text' required />
            </div>
            <div style={{ marginLeft: 30 }}>
              <InputLabel htmlFor='city'>City</InputLabel>
              <TextField name='city' id='city' onChange={changeHandler} value={inputs.city || ''} type='text' required />
            </div>
            <div style={{ marginLeft: 30 }}>
              <InputLabel id='state'>State</InputLabel>
              <Select name='states' id='states' width='100px' labelId='state' label="State" onChange={changeHandler} value={inputs.states || 'NA'} required>
              <MenuItem value='NA'>Select a State</MenuItem>
                <MenuItem value='DL'>Delhi</MenuItem>
                <MenuItem value='UP'>Uttar Pradesh</MenuItem>
                <MenuItem value='BH'>Bihar</MenuItem>
                <MenuItem value='HR'>Haryana</MenuItem>
              </Select>
            </div>
          </div>
        </fieldset>
        <div style={{ display: 'flex' }}>
          <div style={{ marginLeft: 30, marginTop: 30 }}>
            <Button type='submit' variant='contained'>Submit</Button>
          </div>
          <div style={{ marginLeft: 30, marginTop: 30 }}>
            <Button type='reset' variant='contained' onClick={resetHandler}>Reset</Button>
          </div>
        </div>
      </form>
    </div>
  )
}


