import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../../App';


const PrivateRoute = ({children,...rest}) => {
const {login,category}=useContext(UserContext);
const [loggedInUser,setLoggedInUser]=login

    return (
        <div>
                  <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;