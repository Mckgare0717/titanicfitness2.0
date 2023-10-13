import { useState } from "react";
import "./login.css";

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

    return (
        <div className="loginForm-cont">
            <form className="loginForm">
                <h2>{formState.toUpperCase()}</h2>

                {
                    formState == "login" ?
                        <p>Don't have an account?<span onClick={modeSwitch} className="formSwitch"> Register</span></p>
                        : <p>Already have an account?<span onClick={modeSwitch} className="formSwitch"> Login</span></p>
                }

                {
                    formState == "register" ? <>
                        <h3>Enter Name</h3>
                        <input type="text" placeholder="Name" value={displayName} required onChange={(e) => setDisplayName(e.target.value)} />
                    </> : null
                }

                <h3>Enter Email</h3>
                <input type="text" placeholder="Name" value={email} required onChange={(e) => setEmail(e.target.value)} />
                <h3>Enter Password</h3>
                <input type="text" placeholder="Name" value={password} required onChange={(e) => setPassword(e.target.value)} />
                <button className="submitbtn">Submit</button>
            </form>
        </div>
    )
}

export default Login;