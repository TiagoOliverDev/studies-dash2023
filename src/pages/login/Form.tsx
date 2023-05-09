import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';

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
                <span style={{color: "#FFFFFF"}} >Novo por aqui ?</span><a style={{textDecoration: "none", color: "#530182", cursor: "pointer"}} href="http://www.google.com"><span> Crie sua conta agora!</span></a>   
                <Box
                  
                >
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label style={{marginTop: "30px", marginBottom: "14px", color: "#FFFFFF"}} >Email</label>
                    <TextField 
                        id="email" 
                        variant="outlined" 
                        sx={{ "& input":  { borderRadius: "17px !important", color: "#FFFFFF"}, width: "345px", height: "35px", backgroundColor: "#1F1F22 !important"}} />

                    <label style={{marginTop: "30px", color: "#FFFFFF"}} >Senha</label>
                    <TextField
                        style={{width: "345px"}}
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        id={props.id}
                        label={props.label}
                        name={props.name}
                        InputProps={{
                            sx: {
                            bgcolor: "#1F1F22",
                            "& input": {
                                color: "#FFFFFF",
                                borderRadius: "17px !important",
                            },
                            },
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
                        />
                    {/* <TextField id="pass" variant="outlined" sx={{ pt: 1, "& input": { borderRadius: "16px !important" }, width: "345px", height: "35px" }} /> */}
                </div>

                <br/>

                <Box style={{marginTop: "15px", display: 'flex', alignItems: 'center'}}>
                    <label style={{color: "#FFFFFF"}} htmlFor="keep-logged-in">
                        <Checkbox id="keep-logged-in" {...label} defaultChecked style={{  }} />
                        Manter conectado
                    </label>
                    <a href="http://www.google.com" style={{textDecoration: "none", color: "#530182", cursor: "pointer", marginLeft: "70px"}}><span>Esqueci minha senha</span></a>
                </Box>


                </Box>
                <Stack spacing={2} direction="row">
                  <Button style={{borderRadius: 17, width: "345px", height: "35px", marginTop: "29px"}} variant="contained">Entrar</Button>
                </Stack>

                <Box sx={{ position: "relative", width: "100%", maxWidth: 360, bgcolor: "background.paper", marginTop: "31px"  }}>
                    <Divider  variant="middle" />
                    <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "#0B0B0B", color: "#FFFFFF" }}>
                        Ou faça login com
                    </Box>
                </Box>
                <Box style={{marginTop: "28px", display:"flex", justifyContent:"center", alignItems:"center" }} >
                    <Button style={{background: "#1F1F22", margin: "0 10px"}} >
                        <GoogleIcon />
                    </Button>
                    <Button style={{background: "#1F1F22", margin: "0 10px" }} >
                        <InstagramIcon />
                    </Button>
                    <Button style={{background: "#1F1F22", margin: "0 10px" }} >
                        <LinkedInIcon />
                    </Button>
                   
                </Box>
                <Box style={{marginTop: "28px", display:"flex", justifyContent:"center", alignItems:"center" }} >                  
                    <Button style={{background: "#1F1F22", margin: "0 10px" }} >
                        <GitHubIcon />
                    </Button>
                    <Button style={{background: "#1F1F22", margin: "0 10px" }} >
                        <AppleIcon />
                    </Button>
                    <Button style={{background: "#1F1F22", margin: "0 10px" }} >
                        <FacebookIcon />
                    </Button>
                </Box>
            </div>
        </div>
    </div>
  );
}
