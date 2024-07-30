import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { StudentLogin } from "./components/auth/StudentLogin";
import { StudentRegistration } from "./components/auth/StudentRegistration";
import { ForgotPassword } from "./components/auth/ForgotPassword";
import { AdminLogin } from "./components/auth/AdminLogin";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { Dashboard } from "./components/admin/Dashboard";
import { AddCompany } from "./components/admin/AddCompany";
import { ViewCompany } from "./components/admin/ViewCompany";
import { AddJobPost } from "./components/admin/AddJobPost";
import { ViewJobPost } from "./components/admin/ViewJobPost";
import { StudentsView } from "./components/admin/SrudentsView";

import { StudentDashboard } from "./components/student/StudentDashboard";
import { SDashboard } from "./components/student/SDashboard";
import { MakeResume } from "./components/student/MakeResume";
import { ViewResume } from "./components/student/ViewResume";
import { FindJob } from "./components/student/FindJob";
import { ViewAppliedJob } from "./components/student/ViewAppliedJob";
import { GiveFeedback } from "./components/student/GiveFeedback";
import { JobDetails } from "./components/student/JobDetails";
import { ResetPassword } from "./components/auth/ResetPassword";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/auth/student/login" element={<StudentLogin />} />
        <Route
          path="/auth/student/registration"
          element={<StudentRegistration />}
        />
        <Route path="/auth/forgot-password/" element={<ForgotPassword />} />
        <Route path="/auth/reset-password/" element={<ResetPassword />} />
        <Route path="/admin/dashboard/" element={<AdminDashboard />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="manage-company/add" element={<AddCompany />} />
          <Route path="manage-company/view" element={<ViewCompany />} />
          <Route path="manage-jobPost/add" element={<AddJobPost />} />
          <Route path="manage-jobPost/view" element={<ViewJobPost />} />
          <Route path="ViewStudents" element={<StudentsView />} />
        </Route>

        <Route path="/student/dashboard" element={<StudentDashboard />}>
          <Route path="dashboard" element={<SDashboard />} />
          <Route path="resume/make" element={<MakeResume />} />
          <Route path="resume/view" element={<ViewResume />} />
          <Route path="findjob" element={<FindJob />} />
          <Route path="findjob/:jobId" element={<JobDetails />} />
          <Route path="appliedjob/view" element={<ViewAppliedJob />} />
          <Route path="givefeedback" element={<GiveFeedback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
