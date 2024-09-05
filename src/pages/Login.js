import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundLogin from '../images/backgroundLogin.jpg'
import logo from '../images/logoNetflix.png'

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
        <section className="w-full h-screen flex items-center justify-center relative">
            <img src={backgroundLogin} className="w-screen h-screen absolute inset-0 object-cover"/>
            <div className="w-full max-w-md px-6 py-8 bg-black/70 pb-14 rounded-2xl absolute z-10 ">
                <img src={logo}></img>
                <form className="flex flex-col space-y-6 text-lg" onSubmit={logar}>
                    <input 
                        className="p-3 rounded-md text-black" 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={onChangeEmail}/>
                    <input 
                        className="p-3 rounded-md text-black" 
                        type="password" 
                        placeholder="Senha" 
                        value={senha} 
                        onChange={onChangeSenha}/>
                    <button 
                        className="p-3 rounded-md bg-red-600 hover:bg-red-800 font-semibold" 
                        type="submit">Entrar
                    </button>
                </form>
            </div>
        </section>
    )
}