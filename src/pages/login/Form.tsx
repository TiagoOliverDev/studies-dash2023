import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Image from "./Image";

export default function Form(props: any) {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };  

  let path = "/images/baner.svg"

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "54vh"}}>
        <Image path = {path}/>
        <div style={{display: "flex", justifyContent: "center"}}>
            <div>
                <h2>Bem-vindo à AdaUpsoft Academy</h2>
                <span>Novo por aqui ?</span><a href="http://www.google.com"><span style={{color: "blue", cursor: "pointer"}}> Crie sua conta agora!</span></a>   
                <Box
                  
                >
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label style={{marginTop: "30px"}} >Email</label>
                    <TextField id="email" variant="outlined" sx={{ pt: 1, "& input": { borderRadius: "16px !important" }, width: "345px", height: "35px" }} />

                    <label style={{marginTop: "30px"}} >Senha</label>
                    <TextField id="pass" variant="outlined" sx={{ pt: 1, "& input": { borderRadius: "16px !important" }, width: "345px", height: "35px" }} />
                </div>

                <br/>

                <Box style={{marginTop: "15px", display: 'flex', alignItems: 'center'}}>
                    <label htmlFor="keep-logged-in">
                        <Checkbox id="keep-logged-in" {...label} defaultChecked style={{  }} />
                        Manter logado
                    </label>
                    <a href="http://www.google.com" style={{ marginLeft: "70px"}}><span style={{color: "blue", cursor: "pointer"}}>Esqueci minha senha</span></a>
                </Box>


                </Box>
                <Stack spacing={2} direction="row">
                  <Button style={{borderRadius: 16, width: "345px", height: "35px", marginTop: "29px"}} variant="contained">Entrar</Button>
                </Stack>

                <Box sx={{ position: "relative", width: "100%", maxWidth: 360, bgcolor: "background.paper", marginTop: "31px"  }}>
                    <Divider  variant="middle" />
                    <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "white" }}>
                        Ou faça login com
                    </Box>
                </Box>
                <Box style={{marginTop: "28px"}} >
                    Google   Linkedin  Instagram  Facebook
                </Box>
            </div>
        </div>
    </div>
  );
}
