import React from "react";
import UserImage from "../assets/images/user.svg";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated &&(
      <div className="u-cursor-pointer pt-2 pb-2">
        <div
          className="esh-identity-name d-flex align-items-center"
          onClick={() => loginWithRedirect()}
        >
          LOGIN
          <img className="esh-identity-image ml-2" src={UserImage} alt="Login"/>
        </div>
      </div>
    )
  );
};

export default LoginButton;
