import {Switch, Route} from 'react-router-dom'

import Home from './components/Home/index'
import About from './components/About/index'
import Login from './components/Login/index'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute/index'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
