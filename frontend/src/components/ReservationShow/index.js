import './ReservationShow.css';

function ReservationShow({ reservation }) {
    console.log(reservation);
    if(!reservation) return null;
    return (
        <>
            {Object.keys(reservation).map(key => <p>{`${key}: ${reservation[key]}`}</p>)}
        <div className='reservation-show-res-div'>
            
        </div>
        <div className='reservation-show-user-div'>
            
        </div>
        </>
    )
}

export default ReservationShow;