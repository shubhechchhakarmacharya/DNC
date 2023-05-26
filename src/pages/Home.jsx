import { Link } from 'react-router-dom';
import language from '../language';
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
            <Navbar home = "active"/>
            <div className="banner">
                <div className="container ">
                    <h1>Digital Nepal Conclave 2023</h1>
                    <div className="location d-flex">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="add">{language.en.location}</p>
                    </div>
                    <div className="button d-flex mt-4">
                        <button className="form px-5  rounded-3 ">
                            <Link to="/ticket" ><a className='px-5  rounded-3'>Get Ticket</a></Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;