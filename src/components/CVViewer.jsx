
const CVViewer = ({CV}) => {
  return (
    
    <div>
      {`${CV.name},${CV.email},${CV.phone},${CV.location},${CV.portfolio}`}
<<<<<<< HEAD
      <h1>Education</h1>
      {
        CV.school.map((school) => {
          return (
            <div key={school.id}>
              <h2 > {school.schoolName}</h2>
              <h3> {school.schoolLocation}</h3>
              <h3> {school.degree}</h3>
              <h3> {school.major}</h3>
              <h3> {school.gpa}</h3>
              <h3> {school.startDate}</h3>
              <h3> {school.endDate}</h3>
            </div>
          )
        })
      }
      <h1>Work Experience</h1>
      {
        CV.work.map((work) => {
          return (
            <div key={work.id}>
              <h2 > {work.companyName}</h2>
              <h3> {work.companyLocation}</h3>
              <h3> {work.jobTitle}</h3>
              <h3> {work.responsibilities}</h3>
              <h3> {work.startDate}</h3>
              <h3> {work.endDate}</h3>
            </div>
          )
        })
      }
=======
>>>>>>> parent of 1c721ed (Added Education Logic)
    </div>
  )
}

export default CVViewer