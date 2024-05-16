import { Snackbar } from '@mui/material';
import React, { useState } from 'react'


export const UserForm = () => {

    const [inputs, setInputs] = useState({})
    const [openSnackbar, setOpenSnackbar] = useState(false);
    
    const changeHandler = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'radio' ? value : value;
        setInputs(values => ({...values, [name]: newValue}));
    };

    const submitHandler = event => {
        event.preventDefault()
        // alert('Form submitted successfully!!!')
        setOpenSnackbar(true);
    }

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const resetHandler = event => {
        event.preventDefault();
        setInputs({});
    }


  return (
    <div>
        <div>
            <h2>User Form</h2>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} message="Note archived"/>
        </div>
      <form method='post' onSubmit={submitHandler}>
        <fieldset>
            <legend>Personal Info</legend>
            <label htmlFor='fname'>First Name</label>
            <input name='fname' id='fname' onChange={changeHandler} value={inputs.fname || ''} type='text' required/>
            <label htmlFor='mname'>Middle Name</label>
            <input name='mname' id='mname' onChange={changeHandler} value={inputs.mname || ''} type='text' required/>
            <label htmlFor='lname'>Last Name</label>
            <input name='lname' id='lname' onChange={changeHandler} value={inputs.lname || ''} type='text' required/>
        </fieldset>
        <fieldset>
            <legend>Gender</legend>
            <input name='gender' id='male' onChange={changeHandler} checked={inputs.gender === 'male'} value='male' type='radio'/>
            <label htmlFor='male'>Male</label>
            <input name='gender' id='female' onChange={changeHandler} checked={inputs.gender === 'female'} value='female' type='radio'/>
            <label htmlFor='female'>Female</label>
            <input name='gender' id='others' onChange={changeHandler} checked={inputs.gender === 'others'} value='others' type='radio'/>
            <label htmlFor='others'>Others</label>
            <input name='gender' id='na' onChange={changeHandler} checked={inputs.gender === 'na'} value='na' type='radio'/>
            <label htmlFor='na'>Prefer not to say</label>
        </fieldset>
        <fieldset>
            <legend>Contact Info</legend>
            <label htmlFor='phno'>Phone No.</label>
            <input name='phno' id='phno' onChange={changeHandler} value={inputs.phno || ''} type='number' maxLength={10} required/>
            <label htmlFor='email'>Email address</label>
            <input name='email' id='email' onChange={changeHandler} value={inputs.email || ''} type='email' required/>
        </fieldset>
        <fieldset>
            <legend>Residential Address</legend>
            <label htmlFor='house'>House/Flat No.and Name </label>
            <input name='house' id='house' onChange={changeHandler} value={inputs.house || ''} type='text' required/>
            <label htmlFor='city'>City</label>
            <input name='city' id='city' onChange={changeHandler} value={inputs.city || ''} type='text' required/>
            <label htmlFor='states'>State</label>
            <select name='states' id='states' onChange={changeHandler} value={inputs.states || ''} required>
                <option value='DL'>Delhi</option>
                <option value='UP'>Uttar Pradesh</option>
                <option value='BH'>Bihar</option>
                <option value='HR'>Haryana</option>
            </select>
        </fieldset>
        <div>
            <button type='submit'>Submit</button>
            <button type='reset' onClick={resetHandler}>Reset</button>
        </div>
      </form>
    </div>
  )
}


