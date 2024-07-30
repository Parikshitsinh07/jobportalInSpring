import React, { useState } from "react";
import "../../css/Sidebar.css";
import Button from "@mui/material/Button";
import { RxDashboard } from "react-icons/rx";
import { PiStudent } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
import { RiAdminLine } from "react-icons/ri";
import { MdCorporateFare } from "react-icons/md";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      window.location.href = "/";
    }
  };

  const [activeTab, setActiveTab] = useState(null);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu);
  };

  return (
    <>
      <div className="main d-flex">
        <div className="sidebarWrapper">
          <div className="sidebar">
            <ul>
              <li>
                <Link to={"/admin/dashboard/dashboard"}>
                  <Button
                    className={`w-100 ${activeTab === 0 ? "active" : ""}`}
                    onClick={() => isOpenSubmenu(0)}
                  >
                    <span className="icon">
                      <RxDashboard />
                    </span>
                    Dashboard
                  </Button>
                </Link>
              </li>

              <li>
                <Link to={"/admin/dashboard"}>
                  <Button
                    className={`w-100 ${activeTab === 1 ? "active" : ""}`}
                    onClick={() => isOpenSubmenu(1)}
                  >
                    <span className="icon">
                      <RiAdminLine />
                    </span>
                    Add Admin{" "}
                    <span className="arrow">
                      <FaAngleRight />
                    </span>
                  </Button>
                </Link>
              </li>

              <li>
                <Button
                  className={`w-100 ${
                    activeTab === 2 && isToggleSubmenu === true ? "active" : ""
                  }`}
                  onClick={() => isOpenSubmenu(2)}
                >
                  <span className="icon">
                    <MdCorporateFare />
                  </span>
                  Manage Company Details{" "}
                  <span className="arrow">
                    <FaAngleRight />
                  </span>
                </Button>
                <div
                  className={`submenuWrapper ${
                    activeTab === 2 && isToggleSubmenu === true
                      ? "colapse"
                      : "colapsed"
                  }`}
                >
                  <ul className="submenu">
                    <li>
                      <Link to="/admin/dashboard/manage-company/add">
                        Add Company Details
                      </Link>
                    </li>

                    <li>
                      <Link to="/admin/dashboard/manage-company/view">
                        View Company Details
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Button
                  className={`w-100 ${activeTab === 3 ? "active" : ""}`}
                  onClick={() => isOpenSubmenu(3)}
                >
                  <span className="icon">
                    <CategoryOutlinedIcon />
                  </span>
                  Manage Job Post{" "}
                  <span className="arrow">
                    <FaAngleRight />
                  </span>
                </Button>
                <div
                  className={`submenuWrapper ${
                    activeTab === 3 && isToggleSubmenu === true
                      ? "colapse"
                      : "colapsed"
                  }`}
                >
                  <ul className="submenu">
                    <li>
                      <Link to="/admin/dashboard/manage-jobPost/add">
                        Add Job Post
                      </Link>
                    </li>

                    <li>
                      <Link to="/admin/dashboard/manage-jobPost/view">
                        View Job Post
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* <li>
                <Button
                  className={`w-100 ${activeTab === 4 ? "active" : ""}`}
                  onClick={() => isOpenSubmenu(4)}
                >
                  <span className="icon">
                    <PostAddOutlinedIcon />
                  </span>
                  Post Job
                </Button>
              </li>
              <li>
                <Button
                  className={`w-100 ${activeTab === 5 ? "active" : ""}`}
                  onClick={() => isOpenSubmenu(5)}
                >
                  <span className="icon">
                    <WorkOutlineOutlinedIcon />
                  </span>
                  Manage Job{" "}
                  <span className="arrow">
                    <FaAngleRight />
                  </span>
                </Button>
              </li> */}
              <li>
                <Link to="/admin/dashboard/ViewStudents">
                  <Button
                    className={`w-100 ${activeTab === 6 ? "active" : ""}`}
                    onClick={() => isOpenSubmenu(6)}
                  >
                    <span className="icon">
                      <PiStudent />
                    </span>
                    Manage Student
                    <span className="arrow">
                      <FaAngleRight />
                    </span>
                  </Button>
                </Link>
              </li>
              <li>
                <Button
                  className={`w-100 ${activeTab === 7 ? "active" : ""}`}
                  onClick={() => isOpenSubmenu(7)}
                >
                  <span className="icon">
                    <BadgeOutlinedIcon />
                  </span>
                  View Job Application
                </Button>
              </li>
              <li>
                <Button
                  className={`w-100 ${activeTab === 8 ? "active" : ""}`}
                  onClick={() => isOpenSubmenu(8)}
                >
                  <span className="icon">
                    <InsertCommentOutlinedIcon />
                  </span>
                  View Feedback
                </Button>
              </li>
              <li>
                <Button
                  className={`w-100 ${activeTab === 9 ? "active" : ""}`}
                  onClick={() => {
                    isOpenSubmenu(9);
                    handleLogout();
                  }}
                >
                  <span className="icon">
                    <Logout />
                  </span>
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
