import React from "react";
import Main from "./Component/Main/Main";
import Navbar from "../src/Component/Navbar/Navbar";
import Login from "./Component/User/Login/Login";
import Profile from "./Component/User/Profile/Profile";
import AddProject from "./Component/User/AddProject/AddProject";
import ProjectDetail from "./Component/Project/detail/ProjectDetail";
import { logout } from "../src/actions/auth";
import { useAppSelector, useAppDispatch } from "../src/services/hooks";
import { Routes, Route, useLocation } from "react-router-dom";
import jwt from "jwt-decode";
import { ProfileType } from "./Component/User/Profile/Profile";

const App: React.FC = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.auth.user);

  const signOut = React.useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  React.useEffect(() => {
    try {
      if (currentUser) {
        const decode: ProfileType = jwt(currentUser);
        if (decode.exp * 1000 < Date.now()) {
          signOut();
        }
      }
      if (!currentUser) {
        signOut();
      }
    } catch (error) {
      console.log(error);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes location={background || location}>
        <Route path="/" element={<Main />}>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/project-detail/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/project-detail/:id" element={<ProjectDetail />} />
        </Routes>
      )}
    </>
  );
};

export default App;
