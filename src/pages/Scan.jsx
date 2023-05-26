import { Link } from 'react-router-dom';
import language from "../language";
import Navbar from "../components/Navbar";
import Bottom from "../components/Bottom";
import scan from "../assets/scan.png";

function Scan(){
    return(
        <>
        <Navbar ticket = "active"/>
        <div className="button button-form d-flex">
        <button className="form px-4  rounded-3 "> <Link to="/form" ><a >{language.en.form}</a></Link> <i className="fa-solid fa-angle-up fa-rotate-90 text-white"></i></button>
        
        </div>
        <div className="scan mt-5">
            <div className="para">
                <p>Scan to Buy Ticket</p>
            </div>
            <img src={scan}/>
        </div>
        <Bottom/>
        </>
    )
}

export default Scan