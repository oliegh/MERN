import {Switch, Route, Redirect} from 'react-router-dom'
import AuthPages from './pages/AuthPages'
import CreatePage from './pages/CreatePage'
import DetailPages from './pages/DetailPages'
import LinksPages from './pages/LinksPages'

export const useRoutes = isAutenticated => {
  if (isAutenticated) {
    return(
      <Switch>
        <Route path="/links" exact>
          <LinksPages />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/detail/:id" exact>
          <DetailPages />
        </Route>
        <Redirect to="create" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPages />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}