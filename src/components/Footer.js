import { Link } from 'react-router-dom'

/*Footer*/
const Footer = () => {
  return (
    /*It has a copyright and a link to the about project page*/
      <footer>
        <p> Ouma Nyang  &copy; 2022 | Moringa Phase 2 Project</p>
          <Link to='/about'>About Project</Link>
      </footer>
  )
}

export default Footer