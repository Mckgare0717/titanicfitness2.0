import "./health.css"

const Health = ({ image, link, descp }) => {
    return (
        <div className="blog-cont">
            <div className="content-cont">
                <img src={image} alt={descp} />
                <h3><a href={link}>{descp}</a></h3>
            </div>
        </div>
    )
}

export default Health;