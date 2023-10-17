import "./blog.css";
import Health from "../components/health.js"
import pic1 from "../assests/balls.jpg"

const Blog = ()=>{
    return(
        <>
        <h2 className="blog">Blogs</h2>
        <div className="blog-cont">
                
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
        </>
    )
}

export default Blog;