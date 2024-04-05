// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const onClickedLogin = () => {
    const {history} = props
    console.log('logged in')
    const credentials = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    Cookies.set('jwt_token', JSON.stringify(credentials), {expires: 1})
    history.replace('/')
  }
  if (Cookies.get('jwt_token') !== undefined) {
    const {history} = props
    history.replace('/')
  }
  return (
    <div className="login-container">
      <h1 className="login-heading">Please Login</h1>
      <button type="button" className="login-btn" onClick={onClickedLogin}>
        Login with sample creds
      </button>
    </div>
  )
}
export default withRouter(Login)
