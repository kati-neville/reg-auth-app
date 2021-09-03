import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "../services/auth.service";

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();
    const history = useHistory();

    return (
        
        <div className="container">
          {currentUser ? (
            <div className="container">
            <header className="jumbotron">
            <h3>
                <strong>LOGGED IN SUCCESSFULLY</strong>
            </h3>
            </header>
            <p>
                <strong>Token:</strong> {currentUser.data.access_token.substring(0, 20)} ...{" "}
                {currentUser.data.access_token.substr(currentUser.data.access_token.length - 20)}
            </p>
            <p>
                <strong>Id:</strong> {currentUser.data.user.id}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.data.user.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
                {currentUser.roles &&
                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
            </div>
        ):(
             history.push("/login")
        )}
        </div>
    );
};

export default Profile;




