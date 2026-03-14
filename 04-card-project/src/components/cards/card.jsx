import {Bookmark} from "lucide-react";
import "./card.css";
function Card(prop) {
    return <div className="card">
        <div className="top">
        <div className="logo">
            <img src={prop.logo} alt="logoimg" />
        </div>

        <div className="save">
            <button>save<Bookmark size={17} strokeWidth={1.25} /></button>
        </div>
        </div>

        <div className="center">
            <div className="compname">
                <h2>{prop.companyName}</h2>
                <h5>{prop.publishDate}</h5>
            </div>

            <div className="role">
            <h2>{prop.role}</h2>
        </div>

        <div className="buttons">
            <button>{prop.btn1}</button>
            <button>{prop.btn2}</button>
        </div>
    </div>

    <div className="bottom">
         <div className="salary">
            <h2>${prop.salary}/hr</h2>
            <p>{prop.location}</p>
        </div>

        <div className="apply-btn">
            <button>Apply now</button>
            
        </div>
    </div>
    </div>
}

export default Card