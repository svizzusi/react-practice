import { Outlet } from "react-router-dom";

const Profile = ({userName}) => {
  return (
    <div>
        <h1>Welcome, {userName}</h1>
        <Outlet />
    </div>
  )
};

export default Profile;
