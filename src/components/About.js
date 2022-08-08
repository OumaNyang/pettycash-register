import { Link } from 'react-router-dom'

/*Generates a simple about page that has a simple button to go back to the main page*/
const About = () => {
return (
<div>
    <p>
About this project and project details

    </p>
    <hr></hr>
  <Link to='/'>
    <button type="button" className={"btn btn-secondary"}>
    Main Page
    </button>
  </Link>
</div>
)
}

export default About