import "./about.css";
import pic1 from "../assests/logo.PNG"
import pic2 from "../assests/insta.webp"
import pic3 from "../assests/X.webp"

const About = ()=>{
    return(
        <div>
        <div className="abt-cont">
            <h2>About the gym</h2>
             <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>  
            <img src={pic1} alt="Titanic Fitness"/> 
        </div>
        <div className="contact-cont">
            <h2>Contact Info:</h2>
            <h3>Email:<a href="#">info@titanicfit.org.uk</a></h3>
            <h3>Phone Number:<a>+44 7834739436</a></h3>
            <h3>Location: Some where in London,XXX XXX</h3>
            <h2>You can also connect through our social media</h2>
            <div className="social-cont">
                <a href="#"><img src={pic2} alt="Instagram"/></a>
                <a href="#"><img src={pic3} alt="X" className="X"/></a>
            </div>
        </div>
        </div>
    )
}

export default About;