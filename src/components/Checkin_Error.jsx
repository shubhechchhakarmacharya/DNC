import Checkin_Form from "./Checkin_Form";

function Checkin_Error() {
    return (
        <>
            <div className="checkin-error">
                <div className="container">
                    <div className="row">
                        <div className="col-6 checkin-col">
                            <Checkin_Form />
                        </div>
                        <div className="col-6 desc text-white">
                            <p>Srijana Thakuri</p>
                            <div className="status d-flex">
                                <p>Pending </p>
                                <i className="fa-regular fa-circle-down fa-rotate-270 px-3 pt-2"></i>
                                <p>Dispatch</p>
                            </div>
                            <p className="code">Ticket code: L09347</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkin_Error