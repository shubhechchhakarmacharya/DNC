import logo from '../assets/logo.png'
function Checkin_Form(){
    return(
        <>
        <div className='checkin container'>
            <div className='image'>
                <img src={logo}/>
            </div>
            <p className='mt-3'>Check-in</p>
            <div className='input px-4'>
                <input type="text" className='form-control code'/>
                <label htmlFor="" className='form-label mt-3'> Enter barcode value </label>
            </div>
            <div className= "button mt-3">
                    <button className='px-4 py-2 rounded-3'>Check-in</button>
                </div>
        </div>
        </>
    )
}
export default Checkin_Form;