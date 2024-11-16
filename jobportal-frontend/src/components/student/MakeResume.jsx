import React, { useEffect, useState , useContext } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
// Import the components and utility functions as before
import { PersonalDetails } from "./resume/PersonalDetails";
import { EducationDetails } from "./resume/EducationDetails";
import { ExperienceDetails } from "./resume/ExperienceDetails";
import { ProjectDetails } from "./resume/ProjectDetails";
import { UserContext } from "../../context/UserContext";
import { Skills } from "./resume/Skills";
import { ResumePreview } from "./resume/ResumePreview";
import { Hobbies } from "./resume/Hobbies";



export const MakeResume = () => {
  const { user } = useContext(UserContext); // Get the logged-in user
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    objective: "",
    mobile: "",
    dob: "",
    religion: "",
    nationality: "",
    maritalStatus: "single",
    address: "",
    languages: [],
    education: [],
    experience: [],
    hobbies: [],
    skills: [],
    projectDetails: [],
  });

  // Function to fetch student details based on user data
  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/students/login", {
          params: { email: user.email }, // Replace with dynamic email or user ID
        });
        const studentData = response.data;

        // Update the formData state with the fetched student data
        setFormData((prevData) => ({
          ...prevData,
          fullName: `${studentData.firstName} ${studentData.lastName}`,
          email: studentData.email,
          mobile: studentData.mobileNumber,
          address: studentData.addressTemporary,
          nationality: studentData.nationality,
          dob: studentData.dob,
          // Add other fields as necessary
        }));
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };

    fetchStudentDetails();
  }, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Submit the resume data to the backend API
  const submit = async () => {
    generatePDF(formData);
    try {
      await axios.post("/api/resume", formData);
      alert("Resume data submitted successfully!");
      // Optionally reset formData and step here
    } catch (error) {
      console.error("Error submitting resume:", error);
      alert("Failed to submit resume data.");
    }
  };

  const handleFormDataChange = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  // Render components based on steps (same as before)
  const steps = [
    <PersonalDetails formData={formData} onChange={handleFormDataChange} nextStep={nextStep} />,
    <EducationDetails formData={formData} onChange={handleFormDataChange} nextStep={nextStep} prevStep={prevStep} />,
    <ExperienceDetails formData={formData} onChange={handleFormDataChange} nextStep={nextStep} prevStep={prevStep} />,
    <Hobbies formData={formData} onChange={handleFormDataChange} nextStep={nextStep} prevStep={prevStep} />,
    <Skills formData={formData} onChange={handleFormDataChange} nextStep={nextStep} prevStep={prevStep} />,
    <ProjectDetails formData={formData} onChange={handleFormDataChange} nextStep={nextStep} prevStep={prevStep} />,
    <ResumePreview formData={formData} onChange={handleFormDataChange} prevStep={prevStep} submit={submit} />,
  ];

  return (
    <Box sx={{ maxWidth: "650px", margin: "0 auto" }}>
      <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#3f51b5", textTransform: "uppercase", letterSpacing: "0.1em", border: "1px solid #3f51b5" }}>
        Make Resume
      </Typography>
      {steps[step]}
    </Box>
  );
};
