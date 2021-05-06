import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const [username, setUsername] = useState("");
  let history = useHistory();

  useEffect(() => {
    if (currentUser !== null) {
      setUsername(currentUser);
    } else {
      history.push("/login");
    }
  }, []);
  return (
    <div className="container">
      <strong>User Details:</strong>
      <ul>
        {username &&
          username.map((role, index) => (
            <li key={index}>
              <p>{role.email}</p>

              <p>
                <strong>Token:</strong> {role.accessToken.substring(0, 20)} ...{" "}
                {role.accessToken.substr(role.accessToken.length - 20)}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Profile;
