import { TextField } from '@mui/material';
import { useState } from 'react';
import { Button } from '@mui/material';



export default function Home() {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event);
  }
  
  return (
    <div className="">
       <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Login Form</h2>
                <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    value={email}
                 />
                 <TextField 
                    label="Passowrd"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                 />
                  <Button variant="outlined" color="secondary" type="submit">Login</Button>

         </form>
    </div>
  );
}
