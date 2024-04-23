import React from 'react'

const Education = ({id, onChange, deleteEducation }) => {
  return (
    <form>
        <label>School Name</label>
        <input name='schoolName' type='text' onChange={(e)=>onChange(e,id)}></input>
        <label>School Location</label>
        <input name='schoolLocation' type='text' onChange={(e)=>onChange(e,id)}></input>
        <label>Degree</label>
        <input name='degree' type='text' onChange={(e)=>onChange(e,id)}></input>
        <label>Major</label>
        <input name='major' type='text' onChange={(e)=>onChange(e,id)}></input>
        <label>GPA</label>
        <input name='gpa' type='text' onChange={(e)=>onChange(e,id)}></input>
        <label>Start Date</label>
        <input name='startDate' type='date' onChange={(e)=>onChange(e,id)}></input>
        <label>End Date</label>
        <input name='endDate' type='text' onChange={(e)=>onChange(e,id)}></input>
        <button onClick={deleteEducation}>Delete</button>
    </form>
  )
}

export default Education