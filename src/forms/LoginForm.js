import { useContext, useState } from "react";
import { AuthContext } from "../components/ActionContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const LoginForm = ({ changeForm }) => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setToken, setUser } = useContext(AuthContext);
    const [error, setError] = useState(null);



    const login = (e) => {
        e.preventDefault()
        const postData = {
            email,
            password
        }

        axios.post("http://localhost:8000/login", postData).then((res) => {
            setUser(res.data.user)
            setToken(res.data.token)

            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            setError(null)
            navigate("/profile")

        }, (error) => {
            alert(error)
        })


        // alert("trying to log in")
        //here I'm going to send the date to the backend login user api endpoint
    }

    return (
        <form className="loginForm" onSubmit={login}>
            <h2>Login</h2>
            <p>Don't have an account? <span onClick={changeForm} className="form-switch-button">Register</span></p>
            <h3>Enter Email</h3>
            <input type="text" placeholder="Name" value={email} required onChange={(e) => setEmail(e.target.value)} />
            <h3>Enter Password</h3>
            <input type="text" placeholder="Name" value={password} required onChange={(e) => setPassword(e.target.value)} />
            <button className="submitbtn">Submit</button>
        </form>
    )
}

export default LoginForm;