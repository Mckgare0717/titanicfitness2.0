import "./health.css"

const Health = ({image,link,descp}) =>{
    return(
        <div className="content-cont">
            <img src={image} alt={descp}/>
            <h2><a href={link}>{descp}</a></h2>
        </div>
    )
}

export default Health;