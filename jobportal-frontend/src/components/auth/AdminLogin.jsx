import React, { useState } from "react";
import logo from "../../assets/images/gvp_logo.jpg";
import { AdminLoginForm } from "../../Services/Admin";
import { Snackbar, Alert } from "@mui/material";
import { CustomLoader } from "../CustomLoader";
// import "./AdminLogin.css"; // Assuming you have a CSS file for styling
import "../../css/AdminLogin.css";
export const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = {
        username,
        password,
      };

      const response = await AdminLoginForm(data);
      setLoading(false);

      if (response.data) {
        setAlertMessage("Login successful");
        setAlertSeverity("success");
        setOpen(true);
        setTimeout(() => {
          window.location.href = "/admin/dashboard";
        }, 1000);
      } else {
        setAlertMessage("Login failed");
        setAlertSeverity("error");
        setOpen(true);
      }
    } catch (error) {
      setLoading(false);
      setAlertMessage("Login failed");
      setAlertSeverity("error");
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {loading ? (
        <CustomLoader />
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-50 m-2">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-4 mx-auto">
                <div className="card border border-success">
                  <div className="card-header bg-success text-center">
                    <h5 className="card-title text-white">
                      Job Portal Gujarat Vidyapith
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="text-center mt-1 mb-4">
                      <h5>Welcome to Job Portal</h5>
                    </div>
                    <div className="text-center">
                      <img src={logo} alt="logo" width="150" />
                    </div>
                    <h4 className="card-title text-center text-muted mb-4">
                      Admin Login
                    </h4>
                    <form onSubmit={handleLogin}>
                      <div className="mb-3 d-flex justify-content-center">
                        <input
                          type="email"
                          className="form-control"
                          id="username"
                          name="username"
                          style={{ width: "300px" }}
                          placeholder="Enter Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>

                      <div className="mb-3 d-flex justify-content-center">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          style={{ width: "300px" }}
                          placeholder="Enter Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="mb-3 text-end">
                        <a href="/auth/forgot-password/">Forgot Password?</a>
                      </div>
                      <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-success w-50">
                          Login
                        </button>
                      </div>
                      <div className="text-left">
                        <a href="auth/student/login" className="text-secondary">
                          Student Login
                        </a>
                      </div>
                    </form>
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                      className="top-center"
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
        </div>
      )}
    </>
  );
};
