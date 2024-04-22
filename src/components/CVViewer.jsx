
const CVViewer = ({CV}) => {
  return (
    
    <div>
      {`${CV.name},${CV.email},${CV.phone},${CV.location},${CV.portfolio}`}
    </div>
  )
}

export default CVViewer