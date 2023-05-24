import { Button, TextField, Typography } from '@mui/material'
import React, { useState, } from 'react'

const Sb = () => {
  var [pname,setpname]= useState("Steve");
  var [val,setVal]=useState()
  const inputHandler = (e) =>{
    setVal(e.target.value);
    console.log(val)
  }
  const changeName = () =>{
    console.log("Clicked");
    setpname(val)
    setVal("")
  }
    return (
    <div>
        <Typography variant='h4'>hello {pname}</Typography>
       <TextField variant='outlined' value={val} label='Name'onChange={inputHandler}/>
       <br /><br />
        <Button variant='contained'onClick={changeName} >Change</Button>
    </div>
  )
}

export default Sb