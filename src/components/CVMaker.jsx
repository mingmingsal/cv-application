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
  function handleNameChange(e, entry) {
    setCV({
      ...CV,
      name: e.target.value
    })
  }
  function handleNameChange(e) {
    setCV({
      ...CV,
      name: e.target.value
    })
  }
  function handleEmailChange(e) {
    setCV({
      ...CV,
      email: e.target.value
    })
  }
  function handlePhoneChange(e) {
    setCV({
      ...CV,
      phone: e.target.value
    })
  }
  function handleLocationChange(e) {
    setCV({
      ...CV,
      location: e.target.value
    })
  }
  function handlePortfolioChange(e) {
    setCV({
      ...CV,
      portfolio: e.target.value
    })
  }
  return (
    <>
      <Profile onNameChange={handleNameChange} onEmailChange={handleEmailChange}
        onPhoneChange={handlePhoneChange} onLocationChange={handleLocationChange}
        onPortfolioChange={handlePortfolioChange} />
      {`${CV.name},${CV.email},${CV.phone},${CV.location},${CV.portfolio}`}
    </>

  )
}

export default CVMaker