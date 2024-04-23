import { useState } from 'react'
import Profile from './Profile'
<<<<<<< HEAD
import Education from './Education'
import Work from './Work'
const CVMaker = ({handleProfileChange, handlePartChange, addPart, deletePart, CV}) => {
  console.log(CV.school);
  return (
    <>
      <Profile onChange={handleProfileChange} />
       
      {
        
        CV.school.map((school) => {
          return <Education key={`school${school.id}`} onChange={handlePartChange} id={school.id} deletePart={()=>deletePart(school.id,"school")}/>
      })
      }
      <button onClick={()=>addPart("school")}>Add Education</button>

      {
        CV.work.map((work) => {
          return <Work key={`work${work.id}`} onChange={handlePartChange} id={work.id} deletePart={()=>deletePart(work.id,"work")}/>
      })
      } 
      <button onClick={()=>addPart("work")}>Add Work</button>
=======
const CVMaker = ({handleChange}) => {
  
  return (
    <>
      <Profile onChange={handleChange} />
>>>>>>> parent of 1c721ed (Added Education Logic)
    </>

  )
}

export default CVMaker