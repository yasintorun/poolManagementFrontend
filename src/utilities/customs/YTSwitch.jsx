import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import { useHistory } from "react-router-dom";
import _404NotFound from '../../pages/Errors/_404NotFound';
import { types } from '../../services/localStoregeService';
export default function YTSwitch({children}) {
    return (
        <Switch>
            {children}
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