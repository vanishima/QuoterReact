import React, { useEffect, useState, useContext } from "react";
import useFetch from "hooks/useFetch";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const signup = user => {
    console.log("signup", user);
    // const [{ response, error, isLoading }, doFetch] =
    //   useFetch("/auth/register");
    // doFetch({
    //   method: "POST",
    //   data: { user: user },
    //   mode: "cors",
    // });
    // console.log("context signup", response, error, isLoading);

    // if (error) {
    //   setMessage(error.msg);
    // } else {
    //   setCurrentUser(response.user);
    //   setToken(response.token);
    // }

    // return

    setLoading(false);
  };

  const value = {
    currentUser,
    message,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
