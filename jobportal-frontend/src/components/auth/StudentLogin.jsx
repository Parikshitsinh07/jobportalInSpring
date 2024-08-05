import React, { useContext, useState } from "react";
import logo from "../../assets/images/gvp_logo.jpg";
import { useNavigate } from "react-router-dom";
import { studentLoginForm } from "../../Services/Student";
import { UserContext } from "../../context/UserContext";
import { Snackbar, Alert } from "@mui/material";
import { CustomLoader } from "../CustomLoader";

import { AuthContext } from "./AuthContext";

export const StudentLogin = () => {
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [open, setOpen] = useState(false); // State for alert
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const { login } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const data = {
        email,
        password,
        course,
      };

      // Call to your service function for login
      const response = await studentLoginForm(data);

      // Check if response status is 200
      if (response.status === 200) {
        setLoading(false);
        setAlertMessage("Login successful");
        setAlertSeverity("success");
        setOpen(true);
        login();
        setUser(response.data);
        // Redirect to dashboard
        navigate("/student/dashboard");
      } else {
        setLoading(false);
        setAlertMessage("Invalid Credentials");
        setAlertSeverity("error");
        setOpen(true);
      }
    } catch (error) {
      setLoading(false);
      setAlertMessage("Login failed");
      setAlertSeverity("error");
      setOpen(true);
      console.error("Login failed:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {loading ? (
        <CustomLoader />
      ) : (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card border border-success">
                <div className="card-header bg-success text-center">
                  <h3 className="card-title text-white">
                    Job Portal Gujarat Vidyapith
                  </h3>
                </div>
                <div className="card-body">
                  <div className="text-center mt-1 mb-4">
                    <h5>Welcome to Job Portal</h5>
                  </div>
                  <div className="text-center">
                    <img src={logo} alt="logo" width="100" />
                  </div>
                  <h4 className="card-title text-center text-muted mb-4">
                    Student Login
                  </h4>
                  <form onSubmit={handleLogin}>
                    <div className="mb-2 d-flex justify-content-center">
                      <select
                        className="form-select"
                        style={{ width: "300px" }}
                        name="course"
                        id="course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                      >
                        <option value="">Choose Course</option>
                        <option value="MCA">MCA</option>
                        <option value="MBA">MBA</option>
                        <option value="PGDCA">PGDCA</option>
                      </select>
                    </div>
                    <div className="mb-2 d-flex justify-content-center">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        style={{ width: "300px" }}
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-2 d-flex justify-content-center">
                      <div className="input-group" style={{ width: "300px" }}>
                        <input
                          type={passwordVisible ? "text" : "password"}
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Enter Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={togglePasswordVisibility}
                        >
                          {passwordVisible ? "Hide" : "Show"}
                        </button>
                      </div>
                    </div>
                    <div className="mb-2 text-end">
                      <a href="/auth/forgot-password/">Forgot Password?</a>
                    </div>
                    <div className="mb-2 text-center">
                      <button type="submit" className="btn btn-success w-50">
                        Login
                      </button>
                    </div>
                    <div className="text-center">
                      <p>
                        Don't have an account?{" "}
                        <a href="/auth/student/registration">Register</a>
                      </p>
                    </div>
                    <div className="text-left">
                      <a href="/" className="text-secondary">
                        Admin Login
                      </a>
                    </div>
                  </form>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity={alertSeverity}
                      sx={{ width: "100%" }}
                    >
                      {alertMessage}
                    </Alert>
                  </Snackbar>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
