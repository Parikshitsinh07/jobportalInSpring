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
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import { Link } from "react-router-dom";



export const Sidebar = () => {

  
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      window.location.href = "/"; 
    }
  };
  



  const [activeTab,setActiveTab]=useState(null);
  const [isToggleSubmenu,setIsToggleSubmenu]=useState(false);
  const isOpenSubmenu=(index)=>
    {
      setActiveTab(index);
      setIsToggleSubmenu(!isToggleSubmenu);
    }

  return (
    <>
      <div className="main d-flex">
        <div className="sidebarWrapper">
          <div className="sidebar">
            <ul>
              <li>
                <Link to={'/student/dashboard/dashboard'}>
                <Button className={`w-100 ${activeTab===0 ? 'active':''}`}  onClick={()=>isOpenSubmenu(0)}>
                  <span className="icon">
                    <RxDashboard />
                  </span>
                  Dashboard
              
                </Button>
                </Link>
              </li>

              <li>
                
                  <Button className={`w-100 ${activeTab===1 ? 'active':''}` } onClick={()=>isOpenSubmenu(1)} >
                    <span className="icon">
                     <PermContactCalendarOutlinedIcon/>
                    </span>
                    Resume
                    <span className="arrow">
                      <FaAngleRight />
                    </span>
                  </Button>
                  <div className={`submenuWrapper ${activeTab===1  && isToggleSubmenu===true? 'colapse' : 'colapsed'}`}>
                  <ul className="submenu">
                    <li>
                      <Link to="/student/dashboard/resume/make">Make Resume</Link>
                    </li>
                
                    <li>
                      <Link to="/student/dashboard/resume/view">View Resume</Link>
                    </li>
                  </ul>
                </div>
                    
              </li>

              <li>
              <Link to={'/student/dashboard/findjob'}>
                <Button className={`w-100 ${activeTab===2 &&isToggleSubmenu===true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(2)}>
                  <span className="icon">
                  <WorkOutlineOutlinedIcon />
                  </span>
                 Find Job
                  
                </Button>
                </Link>
                
              </li>

              <li>
              <Link to={'/student/dashboard/appliedjob/view'}>
                <Button className={`w-100 ${activeTab===3 ? 'active':''}`} onClick={()=>isOpenSubmenu(3)}>
                  <span className="icon">
                  <BadgeOutlinedIcon />
                  </span>
                 View Applied Job
                  
                </Button>
                </Link>
                
              </li>

              <li>
              <Link to={'/student/dashboard/givefeedback'}>
                <Button className={`w-100 ${activeTab===4 ? 'active':''}`} onClick={()=>isOpenSubmenu(4)}>
                  <span className="icon">
                  <InsertCommentOutlinedIcon />
                  </span>
                  Give Feedback
                </Button>

                </Link>
              </li>
              
              
            

              <li>
                
                <Button className={`w-100 ${activeTab===9 ? 'active':''}`} onClick={()=>{isOpenSubmenu(9);handleLogout();}}>
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
