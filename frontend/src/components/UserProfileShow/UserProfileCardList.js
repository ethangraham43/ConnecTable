import './UserProfileShow.css'
import UserProfileCard from './UserProfileCard'
import { useDispatch, useSelector } from 'react-redux'
import { getReservations, fetchReservations } from '../../store/reservations'
import { useEffect } from 'react';

function UserProfileCardList() {
    const reservations = useSelector(getReservations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReservations());
    }, [dispatch]);

    return (
        <>
        {reservations.map((reservation) => {
            return (
                <div>
                    <UserProfileCard key={reservation.id}  reservation={reservation} />
                </div>
            );
        })}
        </>
    )
}

export default UserProfileCardList;

