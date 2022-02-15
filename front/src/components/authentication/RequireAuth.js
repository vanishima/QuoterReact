import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const currentUser = localStorage.getItem("currentUser");
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

const mapStateToProps = state => ({
  // currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(RequireAuth);
