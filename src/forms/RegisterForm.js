import { useState } from "react";
const RegisterForm = ({ changeForm }) => {
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");
    const [age,setAge] = useState("")

    const register = () => {
        const postData = {
            email,
            displayName,
            password,
            age,
        };
        alert("trying to register in");
        axios.post("http://localhost:8000/register", postData).then((res) => {
            setUser(res.data.display_name)
            setToken(res.data.access_token)
            localStorage.setItem("token", res.data.access_token)
            localStorage.setItem("user", res.data.display_name)
            setError(null)
            navigate("/profile")

        }, (error) => {
            alert(error)
        })

    };

    return (
        <form className="loginForm" onSubmit={register}>
            <h2>Register</h2>
            <p>
                Already have an account?{" "}
                <span onClick={changeForm} className="form-switch-button">
                    Log In
                </span>
            </p>
            <h3>Enter Name</h3>
            <input type="text" placeholder="Name" value={displayName} required onChange={(e) => setDisplayName(e.target.value)} />
            <h3>Enter Age</h3>
            <input type="text" placeholder="Age" value={age} required onChange={(e) => setAge(e.target.value)} />
            <h3>Enter Email</h3>
            <input type="text" placeholder="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
            <h3>Enter Password</h3>
            <input type="text" placeholder="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
            <button className="submitbtn">Submit</button>
        </form>
    );
};

export default RegisterForm;