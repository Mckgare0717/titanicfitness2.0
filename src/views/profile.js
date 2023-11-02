import "./profile.css";
import pic1 from "../assests/avatar.jpg"
import { useNavigate } from "react-router-dom";

const Profile = ()=>{
    var progressBar = 50
    const navigate = useNavigate()

    return(
        <div className="profile-cont">
        <div className="profile-pla">
            <img src={pic1} alt="profileimage"/>
            <h2>Babu Grow</h2>
            <h2>Email:babugrow@titanicfit.org.uk</h2>  
            <button onClick={()=>navigate("/blog")}>Start Workout</button>
        </div>

        <div className="progress-cont">
            <h2>Progress</h2>
            <label for="triceps">Triceps: </label>
            <progress id="triceps" max="100"value={progressBar}>70%</progress>
            <label for="chest">Chest: </label>
            <progress id="chest" max="100"value={progressBar}>50%</progress>
            <label for="forearms">Forearms: </label>
            <progress id="forearms" max="100"value={progressBar}>30%</progress>
            <label for="biceps">Biceps: </label>
            <progress id="biceps" max="100"value={progressBar}>80%</progress>
        </div>
        </div>
    )
}

export default Profile;