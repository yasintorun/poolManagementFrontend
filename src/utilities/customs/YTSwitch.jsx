import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import { useHistory } from "react-router-dom";
import _404NotFound from '../../pages/Errors/_404NotFound';
import _500InternalServer from '../../pages/Errors/_500InternalServer';
import { types } from '../../services/localStoregeService';
export default function YTSwitch({ children }) {
    return (
        <Switch>
            {children}
            <Route path="/404" exact component={_404NotFound} />
            <Route path="/500" exact component={_500InternalServer} />
            <NotFound />
        </Switch>
    )
}

const NotFound = () => {
    let history = useHistory();
    useEffect(() => {
        history.push("/404")
    }, [])
    return null
}