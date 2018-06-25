import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserPage from '../containers/UserPage';
import UsersPage from '../containers/UsersPage';
import NotFoundPage from '../containers/NotFoundPage';

const UsersRouter = ({ match }) => {
    return (
        <Switch>
            <Route exact path={match.path} component={UsersPage} />
            <Route exact path={`${match.path}/:userId`} component={UserPage} />
            <Route component={NotFoundPage} />
        </Switch>
    );
}    

export default UsersRouter;