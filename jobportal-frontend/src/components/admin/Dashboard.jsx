import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    students: 500,
    companies: 50,
    jobPosts: 100,
    applications: 300,
    pendingApplications: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      // Add more pending applications as needed
    ],
  });

  useEffect(() => {
    // You can fetch data dynamically here using Axios or fetch API
    // For static data, you can directly setMetrics as above
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Dashboard</h2>
      <div className="row">
        {/* Number of Registered Students */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-primary text-white h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <i className="fas fa-users fa-3x"></i>
                </div>
                <div className="text-right">
                  <h2>{metrics.students}</h2>
                  <p>Registered Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Number of Companies */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-success text-white h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <i className="fas fa-building fa-3x"></i>
                </div>
                <div className="text-right">
                  <h2>{metrics.companies}</h2>
                  <p>Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Number of Job Posts */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-warning text-white h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <i className="fas fa-briefcase fa-3x"></i>
                </div>
                <div className="text-right">
                  <h2>{metrics.jobPosts}</h2>
                  <p>Job Posts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Number of Applications */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-danger text-white h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <i className="fas fa-file-alt fa-3x"></i>
                </div>
                <div className="text-right">
                  <h2>{metrics.applications}</h2>
                  <p>Applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pending Applications */}
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pending Applications</h5>
              <ul className="list-group">
                {metrics.pendingApplications.map((application) => (
                  <li
                    key={application.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {application.name}
                    <span className="badge badge-primary badge-pill">
                      Pending
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Other statistics or elements can be added here */}
      </div>
    </div>
  );
};
