import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const logo = "https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" 

export function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangeSenha = (event) => {
        setSenha(event.target.value)
    }

    const logar = (event) => {
        event.preventDefault()
        try {
            axios.post('http://localhost:3001/login', {
                email: email,
                senha: senha
            }).then((response) => {
                sessionStorage.setItem('token', response?.data?.sessionID)
                navigate('/filmes')
            }).catch((error) => {
                console.log(error)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="w-full h-screen flex items-center justify-center">
            <div className="w-1/5 flex flex-col gap-10">
                <img src={logo}></img>
                <form className="flex flex-col space-y-4 justify-center" onSubmit={logar}>
                    <input 
                        className="p-2 rounded-xl text-black" 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={onChangeEmail}/>
                    <input 
                        className="p-2 rounded-xl text-black" 
                        type="password" 
                        placeholder="Senha" 
                        value={senha} 
                        onChange={onChangeSenha}/>
                    <button 
                        className="p-2 rounded-xl bg-red-600 hover:bg-red-800" 
                        type="submit">Entrar
                    </button>
                </form>
            </div>
        </section>
    )
}