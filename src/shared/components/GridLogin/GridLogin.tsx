import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';


export default function GridLogin() {
  
  return (
    <div style={{ marginTop: "110px" }} >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
              <Paper sx={{ width: 450, height: 600, overflow: 'auto', backgroundColor: "black"}}>
                  <List 
                      style={{textAlign: "center"}}
                      sx={{ width: '100%' }}
                      subheader={<ListSubheader style={{fontSize: "18px", backgroundColor: "gray"}}>Login</ListSubheader>}               
                  >               
                  </List>
              </Paper>
          </Grid>
      </Grid>   
    </div>
  );
}
