import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/Inventory-Manager">
          <h1>Inventory Manager</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar