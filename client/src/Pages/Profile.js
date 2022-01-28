import React from 'react';
import { Redirect, useParams } from "react-router-dom";
import Auth from "../utils/auth";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { useQuery } from '@apollo/react-hooks'

const Profile = () => {
    const { username: userParam } = useParams();
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
      });
      const user = data?.me || data?.user || {};

        // redirect to personal profile page if username is the logged-in user's
        console.log(user);
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links
        above to sign up or log in!
      </h4>
    );
  }
    return (
        <div>
        <div className="flex-row mb-3">
            
          <h2 className="bg-dark text-secondary p-3 display-inline-block">
            Viewing {user.username}'s profile.
          </h2>
 
            
            <div class="emotion-name"></div>

            </div>
        </div>
    )
}

export default Profile;