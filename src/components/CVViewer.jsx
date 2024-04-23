
const CVViewer = ({ CV }) => {
  return (

    <div>
      {`${CV.name},${CV.email},${CV.phone},${CV.location},${CV.portfolio}`}
      {
        CV.school.map((schoo) => {
          return (
            <div key={schoo.id}>
              <h1 > {schoo.schoolName}</h1>
              <h2> {schoo.schoolLocation}</h2>
              <h2> {schoo.degree}</h2>
              <h2> {schoo.major}</h2>
              <h2> {schoo.gpa}</h2>
              <h2> {schoo.startDate}</h2>
              <h2> {schoo.endDate}</h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default CVViewer