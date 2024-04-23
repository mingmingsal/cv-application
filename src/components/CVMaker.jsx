import { useState } from 'react'
import Profile from './Profile'
import Education from './Education'
const CVMaker = ({handleProfileChange, handleSchoolChange, addSchool, deleteSchool, CV}) => {
  
  return (
    <>
      <Profile onChange={handleProfileChange} />
       
      {
        CV.school.map((schoo) => {
          return <Education key={schoo.id} onChange={handleSchoolChange} id={schoo.id} deleteEducation={()=>deleteSchool(schoo.id)}/>
      })
      }
      <button onClick={addSchool}>Add Education</button>
    </>

  )
}

export default CVMaker