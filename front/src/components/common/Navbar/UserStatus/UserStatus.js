import React from "react";
import { useDispatch } from "react-redux";
import { Navbar, Button } from "react-bootstrap";

import { logout } from "reducers/user/actions";
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const UserStatus = () => {
  const dispatch = useDispatch();

  const logoutClick = () => {
    dispatch(logout());
    window.location.reload();
  };

  return (
    <div>
      <Navbar.Text className="me-2">
        <a href={`/user/${currentUser.id}`}>{currentUser.name}</a>
      </Navbar.Text>
      <Button className="me-2" variant="primary" onClick={logoutClick}>
        Sign Out
      </Button>
    </div>
  );
};

export default UserStatus;
