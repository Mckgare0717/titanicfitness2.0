import "./testimonies.css"

const Testimonies =({testimony,name,image})=>{
    return(
        <div className="testimony-cont">
            <div className="image-cont">
            <img src={image} alt={name}/>
            </div>
            <div className="text-cont">
            <p>{testimony}</p>
            </div>
        </div>
    )

}