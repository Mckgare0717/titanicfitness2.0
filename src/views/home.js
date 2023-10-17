import "./home.css";
import pic1 from "../assests/bodypic1.png"
import pic2 from "../assests/bodypic2.png"
import Testimonies from "../components/testimonies.js"
import pic3 from "../assests/avatar.jpg"
import pic4 from "../assests/gymPic1.jpeg"
import pic5 from "../assests/gympic2.webp"
import { Navigate,useNavigate } from "react-router-dom";
import Health from "../components/health.js"




const Home = ()=>{
    const navigate = useNavigate()
    return(
        <div className="bodyContent">
            <img src={pic1} alt="titanic fitness" className="pic1"/>
            <button onClick={()=>navigate("/login")}>Join Now</button>
            <h1>Reviews:</h1>
            <div className="testimonies">     
                <Testimonies 
                testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                name="john doe"
                image={pic3}/>
                <Testimonies 
                testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                name="john doe"
                image={pic3}/>
                <Testimonies 
                testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                name="john doe"
                image={pic3}/>
            </div>
            <div className="fewvideos">
                <Health image={pic4} link="https://www.youtube.com/watch?v=JyV7mUFSpXs" descp="10 MINUTE LIGHTWEIGHT DUMBBELL BICEP & FOREARM WORKOUT!"/>
                <Health image={pic5} link="https://www.youtube.com/watch?v=j6UyNq_TwGA" descp="Full Body Workout at GYM - 15 Exercises for Total Body mass!"/>
            </div>
        </div>
    )
}

export default Home;