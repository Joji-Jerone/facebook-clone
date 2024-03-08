import React from "react";
import Card from "@mui/material/Card";
import TextField from '@mui/material/TextField';
// import { DateField } from '@mui/x-date-pickers/DateField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./NewAccount.css";







function NewAccount() {


  return (
    <div className="Container">
   
   <Card  className="Container-card" sx={{ minWidth: 350 , maxWidth:500 }}>
   <h1>Sign Up</h1>
   <p> It's quick and easy</p>
   <hr className="Divider"></hr>
   <div className="Details">
   <div className="Name">
   <TextField id="outlined-basic" label="FirstName" variant="outlined"  />
   <TextField id="outlined-basic" label="Surname" variant="outlined"  />
</div>
<div className="Mailpassword">
   <TextField id="outlined-basic" label="Mobile number or email address" variant="outlined"  />
   <TextField id="outlined-basic" label="New Password" variant="outlined"  />
</div>
 
 <InputLabel id="demo-simple-select-label">Date of Birth</InputLabel>
 <div className="DOB">
   <div className="Date">
 <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Date</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Date"
        >
<MenuItem value={1}>1</MenuItem>
<MenuItem value={2}>2</MenuItem>
<MenuItem value={3}>3</MenuItem>
<MenuItem value={4}>4</MenuItem>
<MenuItem value={5}>5</MenuItem>
<MenuItem value={6}>6</MenuItem>
<MenuItem value={7}>7</MenuItem>
<MenuItem value={8}>8</MenuItem>
<MenuItem value={9}>9</MenuItem>
<MenuItem value={10}>10</MenuItem>
<MenuItem value={11}>11</MenuItem>
<MenuItem value={12}>12</MenuItem>
<MenuItem value={13}>13</MenuItem>
<MenuItem value={14}>14</MenuItem>
<MenuItem value={15}>15</MenuItem>
<MenuItem value={16}>16</MenuItem>
<MenuItem value={17}>17</MenuItem>
<MenuItem value={18}>18</MenuItem>
<MenuItem value={19}>19</MenuItem>
<MenuItem value={20}>20</MenuItem>
<MenuItem value={21}>21</MenuItem>
<MenuItem value={22}>22</MenuItem>
<MenuItem value={23}>23</MenuItem>
<MenuItem value={24}>24</MenuItem>
<MenuItem value={25}>25</MenuItem>
<MenuItem value={26}>26</MenuItem>
<MenuItem value={27}>27</MenuItem>
<MenuItem value={28}>28</MenuItem>
<MenuItem value={29}>29</MenuItem>
<MenuItem value={30}>30</MenuItem>
<MenuItem value={31}>30</MenuItem>
        </Select>
      </FormControl>
    </Box>
</div>
<div className="Month">
<Box sx={{ minWidth: 120 }}>
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Month</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Month"
    >
    <MenuItem value={1}>Jan</MenuItem>
    <MenuItem value={2}>Feb</MenuItem>
    <MenuItem value={3}>Mar</MenuItem>
    <MenuItem value={4}>Apr</MenuItem>
    <MenuItem value={5}>May</MenuItem>
    <MenuItem value={6}>Jun</MenuItem>
    <MenuItem value={7}>Jul</MenuItem>
    <MenuItem value={8}>Aug</MenuItem>
    <MenuItem value={9}>Sep</MenuItem>
    <MenuItem value={10}>Oct</MenuItem>
    <MenuItem value={11}>Nov</MenuItem>
    <MenuItem value={12}>Dec</MenuItem>
    </Select>
  </FormControl>
</Box>
</div>
<div className="Year">
<Box sx={{ minWidth: 120 }}>
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Year</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Year"
    >
    <MenuItem value={1}>2000</MenuItem>
    <MenuItem value={2}>2001</MenuItem>
    <MenuItem value={3}>2002</MenuItem>
    <MenuItem value={4}>2003r</MenuItem>
    <MenuItem value={5}>2004</MenuItem>
    <MenuItem value={6}>2005</MenuItem>
    <MenuItem value={7}>2006</MenuItem>
    <MenuItem value={8}>2007</MenuItem>
    <MenuItem value={9}>2008</MenuItem>
    <MenuItem value={10}>2009</MenuItem>
    <MenuItem value={11}>2010</MenuItem>
    <MenuItem value={12}>2011</MenuItem>
    </Select>
  </FormControl>
</Box>
</div>


</div>
<div className="Gender">

<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel className="bordered-radio" value="female" control={<Radio />} label="Female"  labelPlacement="start" />
        <FormControlLabel className="bordered-radio" value="male" control={<Radio />} label="Male" labelPlacement="start"/>
        <FormControlLabel className="bordered-radio" value="other" control={<Radio />} label="Other"  labelPlacement="start"/>
      </RadioGroup>
    </FormControl>
</div>
<div className="Terms">
   <p>People who use our service may have uploaded your contact information to  <a  href="https://www.facebook.com/help/637205020878504"> Learn more.</a></p>
   <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.   <a href="https://www.facebook.com/help/637205020878504">Terms,</a>  <a href="https://www.facebook.com/help/637205020878504">Private Policy,</a>You may receive SMS notifications from us and can opt out at any time.</p>
   
</div>
</div>
<div className="SignUp">
<Button  variant="contained" color="success">
        Sign Up
      </Button>
      </div>
  
   </Card>

   </div>
  );
}

export default NewAccount;