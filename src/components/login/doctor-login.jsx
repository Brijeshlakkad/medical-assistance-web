import { Button, Grid, Paper, TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react';
export function DoctorLogin() {

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto", color: "Green", fontWeight: 'bold' }
    const btnstyle = { margin: '8px 0', backgroundColor: "green" }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>

                    <h2>Log In</h2>
                </Grid>
                <TextField label='Email ID' placeholder='Enter Email ID' fullWidth required />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>

                {/* <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography> */}
            </Paper>
        </Grid>
    )
}

