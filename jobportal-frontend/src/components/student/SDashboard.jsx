import React from "react";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export const SDashboard = () => {
  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              {/*Small Box */}
              <div className="small-box bg-secondary">
                <div class="inner">
                  <h3>2</h3>
                  <p>Applied Job</p>  
                </div>
                <div class="icon">
                  <BadgeOutlinedIcon/>
                </div>
                <a
                  href="/student/dashboard/appliedjob/view"
                  class="small-box-footer"
                >
                 View<KeyboardArrowRightIcon/>
                </a>
              </div>
            </div> 
            {/*end column */}
            <div class="col-lg-4 col-sm-6">
               
                <div class="small-box bg-dark">
                    <div class="inner">
                        <h3>5</h3>

                        <p>Available Job</p>
                    </div>
                    <div class="icon">
                     <WorkOutlineOutlinedIcon/>
                    </div>
                    <a href="/student/dashboard/findjob" class="small-box-footer">View<KeyboardArrowRightIcon/></a>
                </div>
              </div>

          </div>
        </div>
      </section>
    </>
  );
};
