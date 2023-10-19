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
        //here I'm going to send the date to the backend login user api endpoint
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
            <input type="text" placeholder="Name" value={email} required onChange={(e) => setEmail(e.target.value)} />
            <h3>Enter Password</h3>
            <input type="text" placeholder="Name" value={password} required onChange={(e) => setPassword(e.target.value)} />
            <button className="submitbtn">Submit</button>
        </form>
    );
};

export default RegisterForm;