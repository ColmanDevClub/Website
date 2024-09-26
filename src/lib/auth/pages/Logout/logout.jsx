import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../authContext";

const Logout = () => {
  const { user , logout } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        if (user) { 
          await logout(); 
          console.log('You are logged out');
        }
        navigate('/sign-in'); 
      } catch (e) {
        console.log(e.message);
      }
    };

    handleLogout();
  }, [user, logout, navigate]);

  return (
    <></>
  );
};

export default Logout;
