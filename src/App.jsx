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
  })
  function handleChange(e) {
    setCV({
      ...CV,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <CVMaker handleChange={handleChange}/>
      
        <CVViewer CV={CV}/>

    </>
  )
}

export default App
