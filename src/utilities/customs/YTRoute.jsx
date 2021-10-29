import React from 'react'
import { Route } from 'react-router'

export function ProtectedRoute({loginGuard = false, children, ...rest}) {
    let auth = useAuth
    return (
        <Route {...rest} 
            render={(location) => {
                
            }}
        />
    )
}
