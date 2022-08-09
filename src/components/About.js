import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>About Project</h4>
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
