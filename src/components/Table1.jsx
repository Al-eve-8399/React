import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Table1 = () => {

    var [names,setNames] = useState(["Tiya","Joshu","Rahul","Steve"])
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"red"}}>Name</TableCell> 
                        <TableCell style={{color:"blue"}}>Class</TableCell>
                        
                    </TableRow>

                </TableHead>

                <TableBody>

                    {names.map((value,index) =>  //Need curly help for outside return
                    {
                        return(
                            <TableRow>
                                <TableCell>{value}</TableCell>
                                <TableCell>{index}</TableCell>
                            </TableRow>


                        )

                        })}


                </TableBody>
            </Table>
        </TableContainer>


    </div>
  )
}

export default Table1