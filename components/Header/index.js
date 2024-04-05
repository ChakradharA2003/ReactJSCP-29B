// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="link-item">
      Home
    </Link>
    <Link to="/about" className="link-item">
      About
    </Link>
  </div>
)
export default Header
