import "./home.css";
import pic1 from "../assests/bodypic1.png"
import pic2 from "../assests/bodypic2.png"



const Home = ()=>{
    return(
        <div className="bodyContent">
            <img src={pic1} alt="titanic fitness" className="pic1"/>
            <button>Join Now</button>
            <div className="testimonies">
            
                <h3>lsiten to out reviews</h3>
            </div>
        </div>
    )
}

export default Home;