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

        axios.post("http://10.50.40.158:8000/login", postData).then((res) => {
            console.log(res)
            
            console.log(res.data)
            setUser(res.data.display_name)
            setToken(res.data.access_token)
            
            localStorage.setItem("token", res.data.access_token)
            localStorage.setItem("user", res.data.display_name)
            setError(null)
            navigate("/profile")

        }, (error) => {
            alert(error.response.data.detail)
        })


        // alert("trying to log in")
        //here I'm going to send the date to the backend login user api endpoint
    }

    return (
        <form className="loginForm" onSubmit={login}>
            <h2>Login</h2>
            <p>Don't have an account? <span onClick={changeForm} className="form-switch-button">Register</span></p>
            <h3>Enter Email</h3>
            <input type="text" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
            <h3>Enter Password</h3>
            <input type="text" placeholder="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
            <button className="submitbtn">Submit</button>
        </form>
    )
}

export default LoginForm;