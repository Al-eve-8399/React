import React from 'react'
import { TextField, Typography } from '@mui/material';
const First = () => {
  return (
    <div> <h1>Steve A</h1>
    <input placeholder='Name'/> 
   <br/>
   <input type='password'placeholder='password'/>
   <br/>
   <button>Submit</button>
 <br/>

 <Typography variant='h1'>Steve</Typography>
 <br/>
 <TextField variant='outlined'label='Outlined Text'/>
 <br />
 <button variant='contained'>Submit</button>
 </div>
  )
}

export default First
