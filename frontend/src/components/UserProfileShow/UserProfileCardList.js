import './UserProfileShow.css'
import UserProfileCard from './UserProfileCard'
import { useSelector } from 'react-redux'
import { getReservations } from '../../store/reservations'

function UserProfileCardList() {
const reservations = useSelector(getReservations)

    return (
        <>
        {console.log(reservations)}
        {reservations.map((reservation) => (
            <div>
                <UserProfileCard reservation= {reservation} />
            </div>
        ))}
        </>
    )
}

export default UserProfileCardList;