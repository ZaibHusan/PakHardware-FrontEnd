import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../Appcontext/api.js";
import "./logSign.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../../Appcontext/Appcontext.jsx";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const [loading, setLoading] = useState(false);
  const { isUserlogin, isLogin } = useContext(Appcontext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const navigate = useNavigate();


  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate])

  // ===== LOGIN =====
  const handleLogin = async (data) => {
    setLoading(true);

    try {
      const res = await api.post("/Userroutes/logIn", {
        email: data.email,
        password: data.password
      });


      if (res.data.success) {
        await isUserlogin();
        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error(res.data.message || "Login failed");
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  // ===== SIGNUP =====
  const handleSignup = async (data) => {
    setLoading(true);

    try {
      const res = await api.post("/Userroutes/signIn", {
        username: data.name,
        email: data.email,
        password: data.password
      });


      if (res.data.success) {
        await isUserlogin();
        toast.success("Account created");
        navigate("/")
      } else {
        toast.error(res.data.message || "Signup failed");
      }
    } catch (err) {
      console.log(err);
      toast.error("Signup failed");
    } finally {
      setLoading(false);
    }
  };




  return (
    <div className="auth-page">
      <ToastContainer />
      <div className="auth-card">

        {mode === "login" && (
          <div className="auth-face">
            <h2>Login</h2>
            <p className="sub-text">Login to continue shopping</p>

            <form onSubmit={handleSubmit(handleLogin)}>
              <input
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span>{errors.email.message}</span>}

              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <span>{errors.password.message}</span>}

              <button
                type="submit"
                className={loading ? "loading" : ""}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="switch-text">
              Don’t have an account?{" "}
              <span onClick={() => setMode("signup")}>Create one</span>
            </p>
          </div>
        )}

        {mode === "signup" && (
          <div className="auth-face">
            <h2>Create Account</h2>
            <p className="sub-text">Join Pak Hardware today</p>

            <form onSubmit={handleSubmit(handleSignup)}>
              <input
                placeholder="Full Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span>{errors.name.message}</span>}

              <input
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span>{errors.email.message}</span>}

              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" }
                })}
              />
              {errors.password && <span>{errors.password.message}</span>}

              <button
                type="submit"
                className={loading ? "loading" : ""}
              >
                {loading ? "Creating account..." : "Sign Up"}
              </button>
            </form>

            <p className="switch-text">
              Already have an account?{" "}
              <span onClick={() => setMode("login")}>Login</span>
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
