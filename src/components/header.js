import "./header.css"
import { Navigate, useNavigate } from "react-router-dom"
import logo from "../assests/logo.PNG"

const NavButton = ({text,path}) =>{
    const navigate =useNavigate()
    return(
        <button className="nav-Button" onClick={()=>navigate(path)}>
            {text}
        </button>
    )
}
const Header =()=>{
    return(
        <header>
        <div className="header-cont">
            <div className="content-cont">
                <img src={logo}/>
                <div className="logoName">
                <h2 className="titanic">Titanic</h2>
                <h2 className="fitness">Fitness</h2>
                </div>
            </div>
            <div className="navbtn-cont">
                <NavButton text="Home" path="/"/>
                <NavButton text="Blog" path="/blog"/>
                <NavButton text="About" path="/about"/>
                <NavButton text="Login" path="/login"/>
                <NavButton text="Profile" path="/profile"/>
            </div>
        </div>
        </header>
    )
}

export default Header;