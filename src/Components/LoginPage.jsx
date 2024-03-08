import React from "react";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import "./LoginPage.css"



function LoginPage() {


  return (
    <div className="Container">
      <div className="Info">
        <p className="Head1">facebook</p>
        <p className="Head2">Facebook helps you connect and share with the people in your life.</p>
      </div>
    <Card  className="Container-card" sx={{ minWidth: 350 , maxWidth:500 }}>
   
      <TextField id="outlined-basic" label="Email address or phone number" variant="outlined"  />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <Button variant="contained">Login</Button>
      <div className="Link">
      <Link href="#">Forgetten password?</Link>
      </div>
      <hr className="Divider"/>
      <Button variant="contained" color="success">
        Create new account
      </Button>
    </Card>
    </div>
  );
}

export default LoginPage;