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
      id:0,
      schoolName:'',
      schoolLocation:'',
    }
    ],
    skills: [{

    }]

  })
  function handleChange(e) {
    setCV({
      ...CV,
      [e.target.name]: e.target.value
    })
  }
  function addSchool(){
    const newId = CV.school.length;
    const newSchool = [...CV.school,{id:newId}]
    setCV({
      ...CV,
      school:newSchool
    })
    return newId;
  }
  function deleteSchool(id){
    const newSchool = CV.school.filter(schoo => schoo.id !== id)
    setCV({
      ...CV, school:newSchool
    })
  }
  function handleSchoolChange(e, index) {
    const big = CV.school.map((schoo) => {
        if(schoo.id == index){
          return {
            ...schoo,
            [e.target.name]: e.target.value
          }

        }
        else return schoo;
    })
    setCV({
      ...CV,
      school:big,
    })
  }
  return (
    <>
      <CVMaker handleChange={handleChange} handleSchoolChange={handleSchoolChange} addSchool={addSchool} deleteSchool={deleteSchool} CV={CV}/>

      <CVViewer CV={CV} />

    </>
  )
}

export default App
