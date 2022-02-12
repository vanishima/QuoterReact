import React, { useEffect, useState, useContext } from "react";
import myAxios from "hooks/myAxios";

const AuthContext = React.createContext();

export const FRONTEND =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_FRONTEND_PREFIX
    : "";

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);

  const signup = async user => {
    console.log("signup", user);
    setLoading(true);

    const resRaw = await fetch(FRONTEND + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(user),
    });
    const res = await resRaw.json();

    if (!resRaw.ok) {
      return res.msg;
    } else {
      console.log("call succeeded:", res);
      setCurrentUser(JSON.stringify(res.user));
      setToken(res.token);
    }
    setLoading(false);
  };

  const value = {
    currentUser,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
