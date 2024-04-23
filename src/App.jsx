import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
<<<<<<< HEAD
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

=======
>>>>>>> parent of 1c721ed (Added Education Logic)
  })
  function handleChange(e) {
    setCV({
      ...CV,
      [e.target.name]: e.target.value
    })
  }
<<<<<<< HEAD

  function addPart(part) {
    if (part === "school") {
      const newId = CV.school.length;
      const newPart = [...CV.school, { id: newId }]
      setCV({
        ...CV,
        school: newPart
      })
    }
    else if (part === "work") {
      const newId = CV.work.length;
      const newPart = [...CV.work, { id: newId }]
      setCV({
        ...CV,
        work: newPart
      })
    }
  }

  function deletePart(id, part) {
    if(part=="school"){
      const newPart = CV.school.filter(school => school.id !== id)
    setCV({
      ...CV, school: newPart
    })
    }
    else if(part=="work"){
      const newPart = CV.work.filter(work => work.id !== id)
    setCV({
      ...CV, work: newPart
    })
    }
  }
  function handlePartChange(e, index, part) {
    if(part=="school"){
      const big = CV.school.map((school) => {
        if (school.id == index) {
          return {
            ...school,
            [e.target.name]: e.target.value
          }
        }
        else return part;
      })
      setCV({
        ...CV,
        school: big,
      })
    }
    else if(part=="work"){
      const big = CV.work.map((work) => {
        if (work.id == index) {
          return {
            ...work,
            [e.target.name]: e.target.value
          }
  
        }
        else return part;
      })
      setCV({
        ...CV,
        work: big,
      })
    }
  }
  return (
    <>
      <CVMaker handleChange={handleChange} handlePartChange={handlePartChange} addPart={addPart} deletePart={deletePart} CV={CV} />

      <CVViewer CV={CV} />
=======
  return (
    <>
      <CVMaker handleChange={handleChange}/>
      
        <CVViewer CV={CV}/>
>>>>>>> parent of 1c721ed (Added Education Logic)

    </>
  )
}

export default App
