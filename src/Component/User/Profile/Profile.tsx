import React from "react";
import Button from "../../Shared/Button/Button";
import CloseButton from "../../Shared/Button/CloseButton";
import { logout } from "../../../actions/auth";
import { useAppSelector, useAppDispatch } from "../../../services/hooks";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";
import "./profile.scss";

export interface ProfileType {
  userId: String;
  username: String;
  name: String;
  isAdmin: boolean;
  exp: number;
}

function Profile() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [profile, setProfile] = React.useState<ProfileType>();
  const { user: currentUser } = useAppSelector((state) => state.auth);

  const signOut = React.useCallback(() => {
    dispatch(logout());
    navigate(-1);
  }, [dispatch]);

  React.useEffect(() => {
    if (currentUser) {
      let decoded: ProfileType = jwt(currentUser);
      setProfile(decoded);
    }
  }, []);

  return (
    <section className="profile-container">
      <section className="profile-body">
        <CloseButton />
        <div className="profile-content">
          <p>{profile?.username}</p>
          <p>{profile?.name}</p>
          isAdmin : <p>{profile?.isAdmin.toString()}</p>
        </div>
        <div className="logout-button" onClick={signOut}>
          <Button
            text="Log Out"
            backgroundColor="red"
            textColor="white"
            border="white"
            textSize="1em"
            hoverColor="pink"
          />
        </div>
      </section>
    </section>
  );
}

export default Profile;
