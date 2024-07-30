import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export const PersonalDetails = ({ nextStep }) => {
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState("");
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState("");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setLanguage("");
  };

  const addLanguage = () => {
    setLanguages([...languages, language]);
    setLanguage("");
    handleClose();
  };

  const removeLanguage = (index) => {
    const newLanguages = languages.slice();
    newLanguages.splice(index, 1);
    setLanguages(newLanguages);
  };
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(file);
      setPhotoURL(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Box>
        <Card sx={{ mt: 3 }} variant="outlined">
          <CardHeader
            title="Personal Details"
            sx={{ bgcolor: "primary.main", color: "white",
              
              textTransform: 'uppercase',
              letterSpacing: '0.1em' }}
          />
       
          <CardContent>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    border: "1px dashed grey",
                    borderRadius: "4px",
                    padding: "16px",
                    textAlign: "center",
                    width: "150px",
                    height: "150px",
                    margin: "0 auto",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() =>
                    document.getElementById("photo-upload").click()
                  }
                >
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="photo-upload"
                    type="file"
                    onChange={handlePhotoUpload}
                  />
                  {photoURL ? (
                    <Box
                      component="img"
                      src={photoURL}
                      alt="Uploaded Photo"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Typography variant="body1" color="primary">
                      Upload Image
                    </Typography>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Full Name" name="fullName" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" name="email" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidthh

                  multiline
                  rows={4}
                  label="Objective"
                  name="objective"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Mobile" name="mobile" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  name="dob"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Religion" name="religion" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Nationality" name="nationality" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Marital Status"
                  name="maritalStatus"
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Address"
                  name="address"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mt: 3 }} variant="outlined">
          <CardHeader title="Languages Known" sx={{ bgcolor: "primary.main", color: "white",
              
              textTransform: 'uppercase',
              letterSpacing: '0.1em' }}/>
          <CardContent>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={handleClickOpen}
              sx={{ mt: 2 }}
            >
              Add Language
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Add Language</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please enter the language you know.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Language"
                  type="text"
                  fullWidth
                  value={language}
                  onChange={handleLanguageChange}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={addLanguage}>Add</Button>
              </DialogActions>
            </Dialog>

            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Language</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {languages.length > 0 ? (
                    languages.map((language, index) => (
                      <TableRow key={index}>
                        <TableCell>{language}</TableCell>
                        <TableCell align="right">
                          <IconButton onClick={() => removeLanguage(index)}>
                            <RemoveIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={2} align="center">
                        No data !
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ display: "flex", justifyContent: "right", mt: 3 }}>
              <IconButton onClick={nextStep} >
              <ArrowCircleRightOutlinedIcon sx={{fontSize:'40px',}} color="primary"/>                    
              </IconButton>
             
            </Box>

            
          </CardContent>
        </Card>
        
      </Box>
    </>
  );
};
