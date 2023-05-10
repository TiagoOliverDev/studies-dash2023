import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import Image from "./Image";


export default function Form(props: any) {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };  

  let path = "/images/baner.svg"

  //Para password
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "75vh"}}>
        <Image path = {path}/>
        <div style={{display: "flex", justifyContent: "center"}}>
            <div>
                <h2 style={{color: "#FFFFFF"}} >Bem-vindo à AdaUpsoft Academy</h2>
                <span style={{color: "#FFFFFF"}} >Novo por aqui ?</span><a style={{textDecoration: "none", color: "#530182", cursor: "pointer"}} href="/cadastro"><span> Crie sua conta agora!</span></a>   
                <Box                 
                >
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label style={{marginTop: "30px", marginBottom: "14px", color: "#FFFFFF"}} >E-mail</label>
                    <TextField 
                        id="email" 
                        variant="outlined" 
                        InputProps={{   
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircleIcon style={{color: "#540182"}} />
                              </InputAdornment>
                            ),
                          }}
                        sx={{ 
                            "& input":  {color: "#FFFFFF"}, 
                            bgcolor: "#1F1F22",
                            width: "400px", 
                            borderRadius: "10px"                               
                         }}
                        />

                    <label style={{marginTop: "30px", color: "#FFFFFF"}} >Senha</label>
                        <TextField 
                        variant="outlined" 
                        type={showPassword ? "text" : "password"}                          
                        margin="normal"
                        required
                        InputProps={{   
                            startAdornment: (
                            <InputAdornment position="start">
                                <HttpsIcon style={{color: "#540182"}} />
                            </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}                           
                        sx={{ 
                            "& input":  {color: "#FFFFFF"}, 
                            bgcolor: "#1F1F22",
                            width: "400px", 
                            borderRadius: "10px"                               
                        }}
                        
                    />                 
                </div>
                <br/>

                <Box style={{marginTop: "15px", display: 'flex', alignItems: 'center'}}>
                    <label style={{color: "#FFFFFF"}} htmlFor="keep-logged-in">
                        <Checkbox id="keep-logged-in" {...label} defaultChecked style={{  }} />
                        Manter conectado
                    </label>
                    <a href="http://www.google.com" style={{textDecoration: "none", color: "#530182", cursor: "pointer", marginLeft: "75px"}}><span>Esqueci minha senha</span></a>
                </Box>

                </Box>
                <Stack spacing={2} direction="row">
                  <Button style={{borderRadius: 17, width: "400px", height: "40px", marginTop: "29px"}} variant="contained">Entrar</Button>
                </Stack>
                <Box style={{ marginTop: "31px", display: 'flex', justifyContent: "center", alignItems: "center", color: "#FFFFFF"}}>
                    <Box sx={{width: "30%", height: "1px", bgcolor: "gray"}} />
                        <Box sx={{margin: "0 10px"}}>
                        Ou faça login com
                        </Box>
                    <Box sx={{width: "30%", height: "1px", bgcolor: "gray"}} />
                </Box>      
                <Box style={{marginTop: "28px", display:"flex", justifyContent:"center", alignItems:"center" }} >
                    <Button style={{background: "#1F1F22", margin: "0 10px"}} >
                        <GoogleIcon />
                    </Button>              
                </Box>
                <Box style={{marginTop: "28px", display:"flex", justifyContent:"center", alignItems:"center" }} >                  
                    <Button style={{background: "#1F1F22", margin: "0 10px" }} >
                        <GitHubIcon />
                    </Button>
                    <Button style={{background: "#1F1F22", margin: "0 10px" }} >
                        <LinkedInIcon />
                    </Button>
                </Box>
            </div>
        </div>
    </div>
  );
}
