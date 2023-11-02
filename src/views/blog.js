import "./blog.css";
import Health from "../components/health.js"
import pic1 from "../assests/balls.jpg"
import Workoutsdisp from "../components/Workoutsdisp.js"
import axios  from "axios";
import { useEffect, useState } from "react";

const Blog = ()=>{
    const [weight,setWeight] = useState(null)
    const [workout,setWorkout] = useState("choose")
    const [shwWorkout,setshwWorkout] = useState(false)
    const [dispWorkouts,setdispWorkouts] = useState([])

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
          catch(e){
            console.log("exception")
          }
        }


    useEffect(() => {
    

        // fetchData();
     }, []);

     function getOption() {
        // var selectElement = document.querySelector("input[name='workouts']");
        // console.log(selectElement)
        // var output = selectElement.value;
        // document.querySelector('.output').textContent = output;
    }

    function handleSubmit(event){
        event.preventDefault()
        //VALIDATE THAT ITS NOT ON CHOOSE
        fetchData(workout)
    }

    return(
        <div className="blog-pg">
        <h2 className="blog">Blogs</h2>
        <div className="blogpg-cont">
                
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!"/>
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!"/>
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!"/>
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!"/>
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!"/>
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!"/>
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!"/>
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!"/>
                <Health image={pic1} link="https://www.nerdfitness.com/blog/" descp="The 20 Minute Beginner Kettlebell Workout: Try This Simple Workout at Home or Anywhere!"/>
        </div>
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
                {dispWorkouts.map(workouts=>{
                    return <li>
                        <h3>Workout type</h3>{workouts.type}-
                        <h3>Equipment required</h3>{workouts.equipment}
                        <h3>Workout difficulty</h3>{workouts.difficulty}-
                        <h3>instructions</h3><a>{workouts.instructions}</a>
                    </li>
                    console.log(workout)

                })}
            </ul>
        {/* // <Workoutsdisp name="bicep" desc="fefnefubfeufbiefhnewifhiwehfiuwebf" link="" vidname="bicep prep"/> */}
        </div>
        </div>
    )
}

export default Blog;