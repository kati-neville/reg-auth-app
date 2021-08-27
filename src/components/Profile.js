import React, {useState} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "../services/auth.service";

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();

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
            <div className="navbar-nav ml-auto">
            <h5>Sorry, you don't have access to this page. Either Login or Register if you don't have an account yet</h5>
        
                <Link to={"/login"} className="nav-link">  Login </Link>
                <Link to={"/register"} className="nav-link"> Sign Up</Link>
          </div>
        )}
        </div>
    );
};

export default Profile;




