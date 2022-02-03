import React from 'react';
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import { useQuery } from '@apollo/react-hooks'



function Home() {
    const { username: userParam } = useParams();
    const  data  = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
      });
      const user = data?.me || data?.user || {};

      if (!user?.username) {
        return (
            <div>
          {/* <h4>
            You need to be logged in to use this page. Use the navigation links
            above to sign up or log in!
          </h4> */}
                  <div>
                  <h1 className="main-title">How are you feeling today?</h1>
                  <div className="emotion-icon">
                  <Link to="/Happy"><font size="+4">😊</font></Link>
                <Link to="/Sad"><font size="+4">😞</font></Link>
                <Link to="/Stressed"><font size="+4">😣</font></Link>
                <Link to="/Angry"><font size="+4">😠</font></Link>
                <Link to="/Tired"><font size="+4">😴</font></Link>
                  </div>
                    <div className="emotion-name">
                            <div>Happy</div>
                            <div>Sad</div>
                            <div>Stressed</div>
                            <div>Angry</div>
                            <div>Tired</div>
                    </div>
                  </div>
          </div>
        );
      }
    if(user?.username) {
    return (
        <div>
            <h1 className="main-title">How are you feeling today?</h1>
            <div className="emotion-icon">
                <Link to="/Happy"><font size="+4">😊</font></Link>
                <Link to="/Sad"><font size="+4">😞</font></Link>
                <Link to="/Stressed"><font size="+4">😣</font></Link>
                <Link to="/Angry"><font size="+4">😠</font></Link>
                <Link to="/Tired"><font size="+4">😴</font></Link>
            </div>
            <div className="emotion-name">
                <div>Happy</div>
                <div>Sad</div>
                <div>Stressed</div>
                <div>Angry</div>
                <div>Tired</div>
            </div>
        </div>
    )
    }
}

export default Home;