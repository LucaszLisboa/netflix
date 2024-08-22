import { Route, Routes } from "react-router-dom";
import { Filmes } from "../pages/Filmes";
import { Login } from "../pages/Login";

export function MyRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/filmes" element={<Filmes/>} />
        </Routes>
    )
}