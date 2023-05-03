import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';


export default function Form(props: any) {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };  
    
  return (
    <div style={{float: "right"}}>
        <h2>Bem-vindo à AdaUpsoft Academy</h2>
        <p>Novo por aqui ?</p><a href="http://www.google.com"><span style={{color: "blue", cursor: "pointer"}} >Crie sua conta!</span></a>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <label>Email</label>
            <TextField id="email" variant="outlined" />

            <label>Password</label>
            <TextField id="pass" variant="outlined" />
            <br/>
            <label htmlFor="keep-logged-in" style={{ display: "flex", alignItems: "center" }}>
                <Checkbox id="keep-logged-in" {...label} defaultChecked style={{ marginLeft: "auto" }} />
                Manter logado
            </label>

            <a href="http://www.google.com"><span style={{color: "blue", cursor: "pointer"}}>Esqueci minha senha!</span></a>

        </Box>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Entrar</Button>
        </Stack>

        <Box sx={{ position: "relative", width: "100%", maxWidth: 360, bgcolor: "background.paper"  }}>
            <Divider variant="middle" />
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                Ou faça login com
            </Box>
        </Box>
        <Box>
            Google   Linkedin  Instagram  Facebook
        </Box>
    </div>
  );
}
