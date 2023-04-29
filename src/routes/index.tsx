import { Routes, Route, Navigate } from "react-router-dom";
import  Cadastro  from "../pages/cadastro";
import Login from "../pages/login";


export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="*" element={<Navigate to={"/cadastro"}/>}/>
        </Routes>
    )
}