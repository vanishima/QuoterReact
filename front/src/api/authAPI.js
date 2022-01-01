const FRONTEND =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_FRONTEND_PREFIX
    : "";

function myAuth() {
  const auth = {};

  auth.verifyAuth = async () => {
    const resRaw = await fetch(FRONTEND + "/auth/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      mode: "cors",
    });
    const res = await resRaw.json();
    // console.log(resRaw);
    if (resRaw.ok) {
      localStorage.setItem("user", JSON.stringify(res.user));
    } else {
      console.log("[authStatus]auth.verifyAuth: token not valid");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      document.location.replace("/");
    }
    return res;
  };

  auth.logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    console.log("cleared token and user");
  };

  auth.register = async (user) => {
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
      return { msg: res.msg, ok: false };
    } else {
      console.log("Got token:", res.token);
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      return { ok: true };
    }
  };

  auth.login = async (credentials) => {
    // FRONTEND + 
    const resRaw = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(credentials),
    });
    console.log("Got resRaw", resRaw);
    const res = await resRaw.json();

    if (!resRaw.ok) {
      return { ok: false, msg: res.msg };
    } else if (res) {
      console.log("[Login] handleSubmit: Got res", res);
      console.log("[Login] handleSubmit: Got user name:", res.user.name);
      console.log("[Login] handleSubmit: Got token:", res.token);
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      return { ok: true };
    }
  };

  return auth;
}

export default myAuth();
