import { useState } from 'react'
import './App.css'
import CVMaker from './components/CVMaker'
import CVViewer from './components/CVViewer'
function App() {
  const [CV, setCV] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    portfolio: '',
    school: [{
      id: 0,
      schoolName: '',
      schoolLocation: '',
    }
    ],
    skills: [{
      id: 0,
    }],
    work: [{
      id: 0,
    }],
    projects: [{
      id: 0,
    }],

  })

  function handleChange(e) {
    setCV({
      ...CV,
      [e.target.name]: e.target.value
    })
  }

  function addPart(part) {
    let param = null;
    if (part === "school") param = CV.school;
    else if (part === "work") param = CV.work;
    else if (part === "work") param = CV.projects;

    const newId = param.length === 0 ? 0 : param[param.length - 1].id + 1;
    const newPart = [...param, { id: newId }]
    
    if (part === "school") { setCV({ ...CV, school: newPart }) }
    else if (part === "work") { setCV({ ...CV, work: newPart }) }
    else if (part === "projects") { setCV({ ...CV, projects: newPart }) }
  }

  function deletePart(id, part) {
    if (part == "school") {
      const newPart = CV.school.filter(school => school.id !== id)
      setCV({ ...CV, school: newPart })
    }

    else if (part == "work") {
      const newPart = CV.work.filter(work => work.id !== id)
      setCV({ ...CV, work: newPart })
    }

    else if (part == "projects") {
      const newPart = CV.projects.filter(projects => projects.id !== id)
      setCV({ ...CV, projects: newPart })
    }
  }
  function handlePartChange(e, index, part) {
    let change = null;
    if (part == "school") {
      change = CV.school;
    }
    else if (part == "work") {
      change = CV.work;
    }
    else if (part == "projects") {
      change = CV.projects;
    }
    const big = change.map((part) => {
      if (part.id == index) {
        return {
          ...part,
          [e.target.name]: e.target.value
        }

      }
      else return part;
    })
    if (part == "school") {
      setCV({
        ...CV,
        school: big,
      })
    }
    else if (part == "work") {
      setCV({
        ...CV,
        work: big,
      })
    }
    else if (part == "projects") {
      setCV({
        ...CV,
        projects: big,
      })
    }

  }
  return (
    <>
      <CVMaker handleChange={handleChange} handlePartChange={handlePartChange} addPart={addPart} deletePart={deletePart} CV={CV} />

      <CVViewer CV={CV} />

    </>
  )
}

export default App
