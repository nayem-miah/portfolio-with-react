import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Context/useAuth";
import Footer from "../ChildComponents/Footer";
import Header from "../ChildComponents/Header";

const LoginPage = () => {
  const { signInGoogle, signOutGoogle, user } = useAuth();
  return (
    <>
      <Header></Header>

      <div className="logInPage">
        <div className="text-center">
          <div>
            {user.email && (
              <p className="m-4 text-danger">
                You are now login! {user.email}{" "}
              </p>
            )}
          </div>

          {user.email ? (
            <div>
              {" "}
              <Button onClick={signOutGoogle}>Sign Out</Button>{" "}
              <Link className="btn btn-danger" to={'/dashbord'}>DashBord</Link>
            </div>
          ) : (
            <Button onClick={signInGoogle}>Sign In</Button>
          )}
        </div>


      </div>

      <Footer></Footer>
    </>
  );
};

export default LoginPage;
