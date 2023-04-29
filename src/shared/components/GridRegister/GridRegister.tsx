import * as React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function GridRegister() {

  return (
    <div>
      <Grid container spacing={2}>
          <Grid item>
              <Paper sx={{ width: 450, height: 600, overflow: 'auto'}}>
                  <List 
                      style={{textAlign: "center"}}
                      sx={{ width: '100%' }}
                      subheader={<ListSubheader style={{fontSize: "18px", backgroundColor: "gray"}}>Register</ListSubheader>}               
                  >               
                  </List>
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center", // centraliza o conteúdo verticalmente
                      justifyContent: "center", // centraliza o conteúdo horizontalmente
                      height: "50%", // define a altura do Box para preencher toda a altura do Paper
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField id="standard-basic" label="Username" variant="standard" />
                    <TextField id="standard-basic" label="Password" variant="standard" />
                    <TextField id="standard-basic" label="Confirm password" variant="standard" />
                 </Box>
                  <Stack sx={{ marginTop: "auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}  spacing={2} direction="row">
                      <Button variant="contained">Register</Button>
                  </Stack>
              </Paper>
          </Grid>
      </Grid>   
    </div>
  );
}
