// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const About = props => {
  const onClickedLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="home-container">
      <Header />
      <h1 className="home-heading">About Route</h1>
      <button type="button" className="logout-btn" onClick={onClickedLogout}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(About)
