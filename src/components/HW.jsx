import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const HW = () => {
    var [pname,setPname]=useState(""); //useState belongs to react
    const ChangeHome =()=>
    {
        setPname("Welcome to HOME");
    }
    const ChangeGalary =()=>
    {
        setPname("Welcome to Galary");
    }
    const ChangeContacts =()=>
    {
        setPname("Welcome to Contacts");
    }
  return (
    <div>
         <Typography variant='h4'color={'blue'}> {pname}</Typography>
         <hr />
        <Button variant='contained'onClick={ChangeHome}color='success'>Home</Button>
        <Button variant='contained'onClick={ChangeGalary}color='warning'>Galary</Button>
        <Button variant='contained'onClick={ChangeContacts}color='error'>Contacts</Button>
    </div>
  )
}

export default HW