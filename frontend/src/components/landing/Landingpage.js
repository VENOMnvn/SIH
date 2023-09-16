import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Landingpage = () => {
  return (
    <div className='pt-40'>
        <p>Signup here...</p>
      <Button><Link to="/signup">Signup</Link></Button>
    </div>
  )
}

export default Landingpage
