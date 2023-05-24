import { AppBar,Button, Toolbar, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar >
            <Toolbar>
                <Typography sx={{ flexGrow:1 }}color={'Gold'}>NewApp</Typography>
                <Button variant='contained'color='error'><Link to={'/'}style={{textDecoration:'none',color:'White'}}>StateBasics</Link></Button>
                <Button variant='contained'color='error'><Link to={'/first'}style={{textDecoration:'none',color:'White'}}>Fisrt</Link></Button>
                <Button variant='contained'color='error'><Link to={'/table'}style={{textDecoration:'none',color:'White'}}>Table</Link></Button>
                <Button variant='contained'color='error'><Link to={'/api'}style={{textDecoration:'none',color:'White'}}>Users</Link></Button>
            </Toolbar>
            </AppBar>
    </div>
  )
}

export default Navbar