import { useState } from "react";
import InputCadastro from "./Input";
import Box from '@mui/material/Box';
import Image from "./Image"
import { Date } from "./Date";


export default function Container() {

    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    let pathImage = "/images/cadastro.svg"

    const handleName = (e: void) => {
        console.log(e)
    }

    return (
        <Box sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "primary.dark"
        }}>
            <Box
                sx={{
                    width: "55em",
                    height: "30em",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #ccc",
                    borderRadius: "15px",
                    backgroundColor: "#ccc",
                }}
            >
                {/* Image */}
                <Box
                    sx={{
                        width: "40%",
                        height: "100%",
                    }}
                >
                    <Image path={pathImage} />
                </Box>

                {/* input area */}
                <Box
                    sx={{
                        width: "60%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        padding: "2em"
                    }}
                >
                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1em",
                    }} >
                        <InputCadastro
                            label="Nome"
                            value="olá"
                            onChange={handleName}
                        />

                        <InputCadastro
                            label="Sobrenome"
                            value="olá"
                            onChange={() => { }}

                        />
                    </Box>

                    <InputCadastro
                        label="Nome de usuário"
                        value="olá"
                        onChange={() => { }}
                        style={{
                            width: "530px",
                            marginBottom: "1em",

                        }}
                    />

                    <InputCadastro
                        label="E-mail"
                        value="olá"
                        onChange={() => { }}
                        style={{
                            width: "530px",
                            marginBottom: "1em"
                        }}
                    />

                    <InputCadastro
                        label="Senha"
                        value="olá"
                        onChange={() => { }}
                        style={{
                            width: "530px",
                        }}
                    />

                    <InputCadastro
                        label="Senha"
                        value="olá"
                        onChange={() => { }}
                        style={{
                            
                        }}
                        type="date"
                    />
                    
                    <Date />

                </Box>
            </Box>
        </Box>
    );
};
