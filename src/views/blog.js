import "./blog.css";
import Health from "../components/health.js"
import pic1 from "../assests/balls.jpg"
import { useState } from "react";

const Blog = ()=>{
    const [weight,setWeight] = useState(null)
    const [workout,setWorkout] = useState(null)

    return(
        <>
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
        </>
    )
}

export default Blog;