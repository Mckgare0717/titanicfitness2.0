import "./blog.css";
import Health from "../components/health.js"
import pic1 from "../assests/balls.jpg"
import Workoutsdisp from "../components/Workoutsdisp.js"
import axios from "axios";
import { useEffect, useState } from "react";
import { AuthContext } from "../components/ActionContext.js";
import { useContext } from "react";

const Blog = () => {
    const [workout, setWorkout] = useState("choose")
    const [dispWorkouts, setdispWorkouts] = useState([])
    const { token } = useContext(AuthContext)
    const [name,setName]  = useState("")
    const [type,setType]  = useState("")
    const [difficulty,setDifficulty]  = useState("")
    const [equipment,setEquipment]  = useState("")
    const [inst,setInst]  = useState("")
    const [error, setError] = useState(null);

    const fetchData = async (muscle) => {
        console.log("fetching")
        // var muscle = "biceps"
        try {
            const result = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
                { headers: { 'X-Api-Key': 'fpP6jDAx5Iapte7szbe3jQ==EZvtpDsJq6LWfJGQ' } })
                .then((result) => {
                    console.log(result)
                    setdispWorkouts(result.data);
                })
                .catch((error) => {
                    console.error('Error fetching data: ', error);
                })

        }
        catch (e) {
            console.log("exception")
        }
    }

    //this is to add the workouts to the users database
    const findData =(wrkName)=>{
        const selectedData = dispWorkouts.find((workouts)=>workouts.name===wrkName)
        console.log(selectedData)
        const exercData ={
            access_token:token,
            name:selectedData.name,
            type:selectedData.type,
            equipment:selectedData.equipment,
            difficulty:selectedData.difficulty,
            inst:selectedData.instructions
        }
        console.log(exercData)
        axios.post("http://10.50.40.158:8000/workouts",exercData).then((res)=>{
                console.log(res)
                alert("Workout added")
                setError(null)
        },(error)=>{
            alert(error)
        })
        
    }

    useEffect(() => {


        // fetchData();
    }, []);

    

    function handleSubmit(event) {
        event.preventDefault()
        //VALIDATE THAT ITS NOT ON CHOOSE
        fetchData(workout)
    }

    return (
        <div className="blog-pg">
            <h2 className="blog">Blogs</h2>
            <div className="blogpg-cont">

                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!" />
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!" />
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!" />
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!" />
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!" />
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!" />
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!" />
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!" />
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!" />
            </div>
            
            {
                token !== null &&
                 <>
                <div className="cust-cont">
                <h2>Customise your workout plan as per your needs</h2>
                <form>
                    <h2>Choose your workout</h2>
                    <select id="workouts" name="workouts" placeholder="Choose Workout" value={workout} required onChange={(e) => setWorkout(e.target.value)}>
                        <option value="choose">CHOOSE WORKOUT</option>
                        <option value="biceps">Biceps</option>
                        <option value="forearms">Forearms</option>
                        <option value="chest">Chest</option>
                        <option value="triceps">Triceps</option>
                    </select>
                    <button onClick={handleSubmit} type="submit">Get my workout</button>
                </form>

            </div>

                <div className="dispWorkout">
                    <ul>
                        {dispWorkouts.map(workouts => {
                            return <li key={workouts.name}>
                                <button className="addBtn"onClick={()=>findData(workouts.name)}>+</button>
                                <h2>Workout Name</h2><h3 value={name} >{workouts.name}</h3>
                                <h2>Workout type</h2><h3 value={type} >{workouts.type}-</h3>
                                <h2>Equipment required</h2><h3 value={equipment}>{workouts.equipment}</h3>
                                <h2>Workout difficulty</h2><h3 value={difficulty} >{workouts.difficulty}-</h3>
                                <h2>instructions</h2><h3 value={inst} >{workouts.instructions}</h3>

                            </li>


                        })}
                    </ul>

                </div>
                </>
            }

        </div>
    )
}

export default Blog;