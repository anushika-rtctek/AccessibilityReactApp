import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import { Button, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';

export const UserForm = () => {

  const initialInput = {
    fname: '',
    mname: '',
    lname: '',
    gender: '',
    dob: '',
    phno: 0,
    email: '',
    house: '',
    city: '',
    states: 'NA'
  }
  const [inputs, setInputs] = useState(initialInput)
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState({})

  const validateInput = (name, value) => {
    let newErrors = ''
    const currentDate = new Date()
      switch (name) {
        case 'fname':
          if (!value) {
            newErrors = 'First name is required.'
          }
          break
        case 'lname':
          if (!value) {
            newErrors = 'Last name is required.'
          }
          break;
        case 'gender':
          if (!value) {
            newErrors = 'Gender is required.'
        }
        break
        case 'dob':
          if (!value) {
            newErrors = 'Date of Birth is required.'
          } else if (value > currentDate) {
            newErrors = 'Date of Birth cannot be in the future.'
          }
          break
        case 'phno':
          if (!value) {
            newErrors = 'Phone number is required.'
          } else if (!/^\d{10}$/.test(value)) {
            newErrors = 'Phone number must be 10 digits only.'
          }
          break
        case 'email':
          if (!value) {
            newErrors = 'Email is required.'
          } else if (!/\S+@\S+\.\S+/.test(value)) {
            newErrors = 'Email address is invalid.'
          }
          break
        case 'house':
          if (!value) {
            newErrors = 'House/Flat No.and Name is required.'
        }
        break
        case 'city':
          if (!value) {
            newErrors = 'City is required.'
        }
        break
        case 'states':
          if (value == 'NA') {
            newErrors = 'State is required.'
          }
          break  
        default:
          break;
      }
    return newErrors
  }

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
    const error = validateInput(name, value)
    setErrors((prevErrors) => ({...prevErrors, [name]: error}))
  };

  const submitHandler = event => {
    event.preventDefault()
    const newErrors = {}
    for (const key in inputs) {
      const error = validateInput(key, inputs[key])
      if (error) newErrors[key] = error
    }
    console.log(inputs);
    console.log(newErrors);
    if (Object.keys(newErrors).length > 0){
      setErrors(newErrors)
    } else {
      setOpen(true);
    }
  }

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const resetHandler = event => {
    event.preventDefault();
    setInputs(initialInput);
    setErrors({})
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
              <TextField name='fname' id='fname' onChange={changeHandler} value={inputs.fname || ''} type='text' />
              {errors.fname && <p style={{ color: 'red' }}>{errors.fname}</p>}
            </div>
            <div style={{ marginLeft: 30 }}>
              <InputLabel htmlFor='mname'>Middle Name</InputLabel>
              <TextField name='mname' id='mname' onChange={changeHandler} value={inputs.mname || ''} type='text' />
            </div>
            <div style={{ marginLeft: 30 }}>
              <InputLabel htmlFor='lname'>Last Name</InputLabel>
              <TextField name='lname' id='lname' onChange={changeHandler} value={inputs.lname || ''} type='text' />
              {errors.lname && <p style={{ color: 'red' }}>{errors.lname}</p>}
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Gender</legend>
          <RadioGroup name='gender' id='gender' value={inputs.gender} onChange={changeHandler} >
            <div style={{ display: 'flex', marginLeft: 30 }}>
              <FormControlLabel value='male' control={<Radio />} label='Male' />
              <FormControlLabel value='female' control={<Radio />} label='Female' />
              <FormControlLabel value='others' control={<Radio />} label='Others' />
              <FormControlLabel value='na' control={<Radio />} label='Prefer not to specify' />
            </div>
          </RadioGroup>
          {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
        </fieldset>
        <fieldset>
          <legend>Contact Info</legend>
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: 30 }}>
              <InputLabel htmlFor='dob'>Date of Birth</InputLabel>
              <TextField name='dob' id='dob' onChange={changeHandler} value={inputs.dob || ''} type='date' maxLength={10} />
              {errors.dob && <p style={{ color: 'red' }}>{errors.dob}</p>}
            </div>
            <div style={{ marginLeft: 30 }}>
              <InputLabel htmlFor='phno'>Phone No.</InputLabel>
              <TextField name='phno' id='phno' onChange={changeHandler} value={inputs.phno || ''} type='number' maxLength={10} />
              {errors.phno && <p style={{ color: 'red' }}>{errors.phno}</p>}
            </div>
            <div style={{ marginLeft: 30 }}>
              <InputLabel htmlFor='email'>Email address</InputLabel>
              <TextField name='email' id='email' onChange={changeHandler} value={inputs.email || ''} type='email' />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Residential Address</legend>
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: 30 }}>
              <InputLabel htmlFor='house'>House/Flat No.and Name </InputLabel>
              <TextField name='house' id='house' onChange={changeHandler} value={inputs.house || ''} type='text' />
              {errors.house && <p style={{ color: 'red' }}>{errors.house}</p>}
            </div>
            <div style={{ marginLeft: 30 }}>
              <InputLabel htmlFor='city'>City</InputLabel>
              <TextField name='city' id='city' onChange={changeHandler} value={inputs.city || ''} type='text' />
              {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
            </div>
            <div style={{ marginLeft: 30 }}>
              <InputLabel id='state'>State</InputLabel>
              <Select name='states' id='states' width='100px' labelId='state' label="State" onChange={changeHandler} value={inputs.states || 'NA'} >
                <MenuItem value='NA'>Select a State</MenuItem>
                <MenuItem value='DL'>Delhi</MenuItem>
                <MenuItem value='UP'>Uttar Pradesh</MenuItem>
                <MenuItem value='BH'>Bihar</MenuItem>
                <MenuItem value='HR'>Haryana</MenuItem>
              </Select>
              {errors.states && <p style={{ color: 'red' }}>{errors.states}</p>}
            </div>
          </div>
        </fieldset>
        <div style={{ display: 'flex' }}>
          <div style={{ marginLeft: 30, marginTop: 30 }}>
            <Button type='submit' variant='contained' onClick={submitHandler}>Submit</Button>
          </div>
          <div style={{ marginLeft: 30, marginTop: 30 }}>
            <Button type='reset' variant='contained' onClick={resetHandler}>Reset</Button>
          </div>
        </div>
      </form>
    </div>
  )
}


