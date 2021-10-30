import Cookies from 'js-cookie';
import React from 'react'
import { Redirect, Route, useLocation } from 'react-router'
import { types } from '../../services/localStoregeService'
import { CookieTypes } from '../cookieTypes';

export function ProtectedRoute({children, ...rest}) {
    const location = useLocation();
    let isLogin = Cookies.get(CookieTypes.AUTH)
    return isLogin ? (<Route {...rest}/>) : (<Redirect to={{pathname:"/auth/login", state: {from: location}}}/>)
}



export const PathRedirect = ({ path = "/", to }) => {
    return (
      <Route exact path={path}>
        <Redirect to={to} />
      </Route>
    )
  }