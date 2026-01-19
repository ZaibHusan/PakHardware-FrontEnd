import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Appcontext } from "./Appcontext.jsx";
import { toast } from "react-toastify";

export default function PrivateRoute({ children }) {
  const { isLogin, authLoading } = useContext(Appcontext);

  if (authLoading) {
    return <div style={{ padding: "40px", textAlign: "center" }}>Checking session...</div>;
  }

 

  return isLogin ? children : <Navigate   to="/AuthPage" />;
}
