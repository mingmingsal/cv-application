import { useState } from 'react'
import Profile from './Profile'
import Education from './Education'
import Projects from './Projects'
import Work from './Work'
const CVMaker = ({handleProfileChange, handlePartChange, addPart, deletePart, CV}) => {
  return (
    <>
      <Profile onChange={handleProfileChange} />
       
      {
        
        CV.school.map((school) => {
          const partId = school.id;
          return <Education key={`school${partId}`} onChange={handlePartChange} id={partId} deletePart={()=>deletePart(partId,"school")}/>
      })
      }
      <button onClick={()=>addPart("school")}>Add Education</button>

      {
        CV.work.map((work) => {
          const partId = work.id;
          return <Work key={`work${partId}`} onChange={handlePartChange} id={partId} deletePart={()=>deletePart(partId,"work")}/>
      })
      } 
      <button onClick={()=>addPart("work")}>Add Work</button>
      
    </>

  )
}

export default CVMaker