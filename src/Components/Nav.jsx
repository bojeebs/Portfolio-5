import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
      <Link to="/ComponentA">
        <h2> Component A </h2>
      </Link>

      <Link to="/ComponentB">
        <h2> Component B </h2>
      </Link>

      <Link to="/">
        <h2> Home </h2>
      </Link>
    </div>
  )
}

export default Nav