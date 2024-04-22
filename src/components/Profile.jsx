import React from 'react'

const Profile = ({onChange}) => {
  return (
    <form>
        <label>Name</label>
        <input name='name' type='text' onChange={onChange}></input>
        <label>Email</label>
        <input name='email' type='text' onChange={onChange}></input>
        <label>Phone Number</label>
        <input name='phone' type='text' onChange={onChange}></input>
        <label>Location</label>
        <input name='location' type='text' onChange={onChange}></input>
        <label>Portfolio</label>
        <input name='portfolio' type='text' onChange={onChange}></input>
    </form>
  )
}

export default Profile