import { useState } from "react";
import "./login.css";
import RegisterForm from "../forms/RegisterForm";
import LoginForm from "../forms/LoginForm";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [formState, setFormstate] = useState("login")

    const modeSwitch = () => {
        if (formState == "login") {
            setFormstate("register")
        } else {
            setFormstate("login")
        }
    }

    if (formState=="login"){
        return(
            <div className="loginForm-cont">
            
            <LoginForm changeForm={modeSwitch}/>
            </div>
        )
    }else{
        return(
            <div className="loginForm-cont">
                
                <RegisterForm changeForm={modeSwitch}/>
            </div>
        )
    }

    
}

export default Login;