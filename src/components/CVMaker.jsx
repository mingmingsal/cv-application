import { useState } from 'react'
import Profile from './Profile'
const CVMaker = () => {
  const [CV, setCV] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    portfolio: '',
  })
  function handleChange(e,) {
    setCV({
      ...CV,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <>
      <Profile onChange={handleChange} />
      {`${CV.name},${CV.email},${CV.phone},${CV.location},${CV.portfolio}`}
    </>

  )
}

export default CVMaker