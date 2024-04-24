import React from 'react'

const Projects = ({id, onChange, deletePart }) => {
  return (
    <form>
        <label>Project Name</label>
        <input name='projectName' type='text' onChange={(e)=>onChange(e,id,"projects")}></input>
        <label>Project Description</label>
        <input name='projectDescription' type='text' onChange={(e)=>onChange(e,id,"projects")}></input>
        <label>Project Link</label>
        <input name='projectLink' type='text' onChange={(e)=>onChange(e,id,"projects")}></input>
        <label>Tools Used</label>
        <input name='toolsUsed' type='text' onChange={(e)=>onChange(e,id,"projects")}></input>
        <button onClick={deletePart}>Delete</button>
    </form>
  )
}

export default Projects