import "./header.css"
import {  useNavigate } from "react-router-dom"
import logo from "../assests/logo.PNG"
import { AuthContext } from "./ActionContext"
import { useContext } from "react"

const NavButton = ({text,path}) =>{
    const navigate =useNavigate()
    return(
        <button className="nav-Button" onClick={()=>navigate(path)}>
            {text}
        </button>
    )
}

const LogoutBtn =()=>{
    const {token,setToken,setUser} = useContext(AuthContext)
    const navigate = useNavigate()

    function  logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setToken(null)
        setUser(null)
        navigate("/")
    }

    if(token){
        return(
            <button className="logout-btn" onClick={logout}>Logout</button>
        )
    }
}

const ProfileBtn = ()=>{
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    if (user){
        return (
            <button className="profile-btn" onClick={()=>navigate("/profile")}>
            {user[0].toUpperCase()}
           
            </button>
        )
    }


}

const Header =()=>{
    const  {token} = useContext(AuthContext)
    

    return(
        <header>
        <div className="header-cont">
            <div className="content-cont1">
                <img src={logo}/>
                <div className="logoName">
                <h2 className="titanic">Titanic</h2>
                <h2 className="fitness">Fitness</h2>
                </div>
            </div>
            <div className="navbtn-cont">
                <NavButton text="Home" path="/"/>
                <NavButton text="Blog" path="/blog"/>
                <NavButton text="Plans" path="/plans"/>
                <NavButton text="About" path="/about"/>
                {token === null && <NavButton text="Login/Register" path="/login"/>}
                <LogoutBtn/>
                <ProfileBtn/>
                
                
                
            </div>
        </div>
        </header>
    )
}

export default Header;