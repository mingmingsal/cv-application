import { useState } from 'react'
import Profile from './Profile'
const CVMaker = ({handleChange}) => {
  
  return (
    <>
      <Profile onChange={handleChange} />
    </>

  )
}

export default CVMaker