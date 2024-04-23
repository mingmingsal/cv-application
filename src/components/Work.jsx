import React from 'react'

const Work = ({id, onChange, deletePart }) => {
  return (
    <form>
        <label>Company Name</label>
        <input name='companyName' type='text' onChange={(e)=>onChange(e,id,"work")}></input>
        <label>Company Location</label>
        <input name='companyLocation' type='text' onChange={(e)=>onChange(e,id,"work")}></input>
        <label>Job Title</label>
        <input name='jobTitle' type='text' onChange={(e)=>onChange(e,id,"work")}></input>
        <label>Job Responsibilities</label>
        <input name='responsibilities' type='text' onChange={(e)=>onChange(e,id,"work")}></input>
        <label>Start Date</label>
        <input name='startDate' type='date' onChange={(e)=>onChange(e,id,"work")}></input>
        <label>End Date</label>
        <input name='endDate' type='date' onChange={(e)=>onChange(e,id,"work")}></input>
        <button onClick={deletePart}>Delete</button>
    </form>
  )
}

export default Work