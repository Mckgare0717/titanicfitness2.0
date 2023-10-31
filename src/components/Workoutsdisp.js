import "./Workoutsdisp.css"

const Workoutsdisp =({name,link,desc,vidname})=>{
    return(
        <div className="workouts">
            <h3>{name}</h3>
            <p>{desc}</p>
            <a href={link}>{vidname}</a>
        </div>
    )
}


export default Workoutsdisp;