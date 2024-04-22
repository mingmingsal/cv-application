import React from 'react'

const Profile = ({onNameChange,onEmailChange,onPhoneChange,onLocationChange,onPortfolioChange}) => {
  return (
    <form>
        <label>Name</label>
        <input name='name' type='text' onChange={onNameChange}></input>
        <label>Email</label>
        <input name='email' type='text' onChange={onEmailChange}></input>
        <label>Phone Number</label>
        <input name='phone' type='text' onChange={onPhoneChange}></input>
        <label>Location</label>
        <input name='location' type='text' onChange={onLocationChange}></input>
        <label>Portfolio</label>
        <input name='portfolio' type='text' onChange={onPortfolioChange}></input>
    </form>
  )
}

export default Profile