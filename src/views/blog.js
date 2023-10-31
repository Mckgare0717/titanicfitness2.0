import "./blog.css";
import Health from "../components/health.js"
import pic1 from "../assests/balls.jpg"
import Workoutsdisp from "../components/Workoutsdisp.js"
import { axios } from "axios";
import { useEffect, useState } from "react";

const Blog = ()=>{
    const [weight,setWeight] = useState(null)
    const [workout,setWorkout] = useState(null)
    const [shwWorkout,setshwWorkout] = useState(false)
    const [dispWorkouts,setdispWorkouts] = useState({})

    useEffect(() => {
        const fetchData = async () => {
        var muscle = "biceps"
          try {
            const result = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=' + muscle, 
             { headers: { 'api-key': 'fpP6jDAx5Iapte7szbe3jQ==EZvtpDsJq6LWfJGQ' },}
            );
            setdispWorkouts(result.data);
          } catch (error) {
            console.error('Error fetching data: ', error);
          }
        };
    
        fetchData();
     }, []);

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
                <h2>Enter Weight</h2>
                <input type="text"  placeholder="Enter Weight" value={weight} required onChange={(e) => setWeight(e.target.value)}/>
                <h2>Choose your workout</h2>
                <select id="workouts" name="workouts" value={workout} required onChange={(e) => setWorkout(e.target.value)}>
                    <option value="weightLoose">Weight Loose</option>
                    <option value="weightGain">Weight Gain</option>
                    <option value="biceps">Biceps</option>
                </select>
                <button type="submit">Get my workout</button>
            </form>
            
        </div>
        <div className="dispWorkout">
            <ul>
                {dispWorkouts.map(workout=>{
                    <li>
                        {workout.type}-
                        {workout.equipment}
                        {workout.difficulty}
                        <a>{workout.instructions}</a>
                    </li>
                })}
            </ul>
        <Workoutsdisp name="bicep" desc="fefnefubfeufbiefhnewifhiwehfiuwebf" link="" vidname="bicep prep"/>
        </div>
        </div>
    )
}

export default Blog;