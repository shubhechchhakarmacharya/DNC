import language from "../language";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Bottom from "../components/Bottom";
function Ticket() {
    return (
        <>
            <Navbar ticket="active" />
            <div className="ticket container">
                <div className="para fw-semibold ">Choose your way to Purchase Ticket</div>
                <p className="date mt-2">{language.en.date}</p>
                <div className="button d-flex mt-4">
                    <button className="form px-4  rounded-3 ">
                        <Link to="/form">
                            <a>{language.en.form}</a>
                        </Link>
                    </button>
                    <button className="scan px-4 ms-5 rounded-3">
                        <Link to="/scan">
                            <a>{language.en.scan}</a>
                            </Link>
                    </button>
                </div>
            </div>
            <Bottom />
        </>
    )
}
export default Ticket;