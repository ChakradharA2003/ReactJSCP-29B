// Write your JS code here
import {withRouter, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  if (Cookies.get('jwt_token') === undefined) {
    const {history} = props
    history.replace('/login')
  }
  return <Route {...props} />
}
export default withRouter(ProtectedRoute)
