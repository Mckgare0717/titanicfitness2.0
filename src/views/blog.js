import "./blog.css";
import Health from "../components/health.js"
import pic1 from "../assests/balls.jpg"
import Workoutsdisp from "../components/Workoutsdisp.js"
import axios  from "axios";
import { useEffect, useState } from "react";

const Blog = ()=>{
    const [weight,setWeight] = useState(null)
    const [workout,setWorkout] = useState("")
    const [shwWorkout,setshwWorkout] = useState(false)
    const [dispWorkouts,setdispWorkouts] = useState([])

    const fetchData = async () => {
        var muscle = "biceps"
          try {
            const result = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=' + muscle, 
             { headers: { 'X-Api-Key': 'fpP6jDAx5Iapte7szbe3jQ==EZvtpDsJq6LWfJGQ' } })
             .then((result) => {
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
    

        fetchData();
     }, []);

    //  function getOption() {
    //     var selectElement = document.querySelector("#workout");
    //     var output = selectElement.value;
    //     document.querySelector('.output').textContent = output;
    // }

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
                    <option value="biceps">Biceps</option>
                    <option value="forearms">Forearms</option>
                    <option value="chest">Chest</option>
                    <option value="triceps">Triceps</option>
                </select>
                <button  type="submit">Get my workout</button>
            </form>
            
        </div>
        <div className="dispWorkout">
            <ul>
                {dispWorkouts.map(workouts=>{
                    <li>
                        {workouts.type}-
                        {workouts.equipment}
                        {workouts.difficulty}
                        <a>{workouts.instructions}</a>
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