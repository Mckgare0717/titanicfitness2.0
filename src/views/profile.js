import "./profile.css";
import pic1 from "../assests/avatar.jpg"
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { AuthContext } from "../components/ActionContext.js"
import { useContext, useState } from "react";
import axios from "axios";

const Profile = () => {
    var progressBar = 50
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { token } = useContext(AuthContext)
    const [myWorkout, setMyWorkout] = useState([])
    console.log(user)

    const myWorkouts = () => {
        const postData = {
            access_token: token
        }

        axios.post("http://localhost:8000/myworkouts", postData).then((res) => {
            console.log(res.data)
            setMyWorkout(res.data)
        }, (error) => {
            alert(error)
        }
        )



    }

    return (
        <div className="profile-cont">
            <div className="profile-pla">
                <img src={pic1} alt="profileimage" />
                <h2>{user.toUpperCase()}</h2>
                <h2>Email:{user}@titanicfit.org.uk</h2>
                <button onClick={() => navigate("/blog")}>Start Workout</button>
            </div>

            <div className="progress-cont">
                <h2>Progress</h2>
                <label for="triceps">Triceps: </label>
                <progress id="triceps" max="100" value={progressBar}>70%</progress>
                <label for="chest">Chest: </label>
                <progress id="chest" max="100" value={progressBar}>50%</progress>
                <label for="forearms">Forearms: </label>
                <progress id="forearms" max="100" value={progressBar}>30%</progress>
                <label for="biceps">Biceps: </label>
                <progress id="biceps" max="100" value={progressBar}>80%</progress>
            </div>
            <div className="displayWrk">
                <h1>Workouts</h1>
                <button onClick={myWorkouts} className="wrkbut">Get my Workout</button>
                <div >
                    <ul>
                        {myWorkout.map(workouts => {
                            return <li >
                                <Popup trigger=
                                    {<button> {workouts.exercise_name} </button>}
                                    modal nested>
                                    {
                                        close => (
                                            <div className='workout-box'>
                                                <div className='content'>
                                                    <h2>Workout Name</h2>
                                                    <h3  >{workouts.exercise_name}</h3>
                                                    <h2>Workout type</h2>
                                                    <h3>{workouts.exercise_type}</h3>
                                                    <h2>Equipment required</h2>
                                                    <h3>{workouts.exercise_equipment}</h3>
                                                    <h2>Workout difficulty</h2>
                                                    <h3>{workouts.exercise_difficulty}</h3>
                                                    <h2>instructions</h2>
                                                    <h3 >{workouts.exercise_instruction}</h3>
                                                </div>
                                                <div>
                                                    <button onClick=
                                                        {() => close()}>
                                                        Close Workout
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </Popup>


                            </li>


                        })}
                    </ul>

                </div>
                <h1>{myWorkouts}</h1>
            </div>
        </div>
    )
}

export default Profile;