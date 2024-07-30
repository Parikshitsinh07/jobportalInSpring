import React from 'react'
import { useState } from 'react';
import { Box, Typography } from "@mui/material";
import { PersonalDetails } from './resume/PersonalDetails';

import {EducationDetails } from './resume/EducationDetails';
import {ExperienceDetails } from './resume/ExperienceDetails';
import {Hobbies} from './resume/Hobbies';
import {Skills } from './resume/Skills';
import { ProjectDetails } from './resume/ProjectDetails';



export const MakeResume = () => {
  const [step, setStep] = useState(0);
 {/*
  const [formData, setFormData] = useState({
    languages: [],
    education: [],
    experience: [],
    hobbies: [],
    skills: [],
    projectDetails: [],
  });
  
  
  */} 
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submit = () => {
    console.log(formData);
    
  };
  const steps = [
    <PersonalDetails  nextStep={nextStep} />,
    <EducationDetails  nextStep={nextStep} prevStep={prevStep} />,
    <ExperienceDetails  nextStep={nextStep} prevStep={prevStep} />,
    <Hobbies  nextStep={nextStep} prevStep={prevStep} />,
    <Skills  nextStep={nextStep} prevStep={prevStep} />,
    <ProjectDetails  prevStep={prevStep} submit={submit} />,
  ];


  
  return (
    <>
      <Box sx={{maxWidth:'650px',margin:'0 auto'}}>
          <Typography varient="h2" align='center' gutterBottom 
          sx={{
            fontWeight: 'bold',
            color: '#3f51b5',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            border: '1px solid #3f51b5',
            
            
          }}
          
          >
                Make Resume 
          </Typography>
          {steps[step]}
          
      </Box>
    
    </>
  )
}
