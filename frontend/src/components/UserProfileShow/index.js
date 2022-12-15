import { useSelector } from 'react-redux';
import './UserProfileShow.css'
import UserProfileCardList from './UserProfileCardList';
import { fetchRestaurants } from '../../store/restaurants';

function UserProfileShow() {
    const user = useSelector(({session: {user}}) => user ? user : {});
    const restaurants = useSelector(fetchRestaurants)
    // debugger
    return (
        <>
            <div className='user-show-header-div'>
                <h1 className="user-show-header">{user.firstName} {user.lastName}</h1>
                <p className="fake-point-user-show">0 points</p>
            </div>
            <div className='user-show-div-body'>
                <div className='user-show-menu'>
                    <ul className='user-show-menu-list'>
                        <li className='user-show-menu-li-first'>Reservations</li>
                        <li className='user-show-menu-li'>Saved Restaurant</li>
                        <li className='user-show-menu-li'>Account Details</li>
                        <li className='user-show-menu-li'>Preferences</li>
                        <li className='user-show-menu-li'>Payment Methods</li>
                    </ul>
                </div>
                <div className='user-show-reservations'>
                    <h2 className='upcoming-reservations-h2'>Upcoming Reservations</h2>
                    <UserProfileCardList key={user.id}/>
                </div>
            </div>
        </>
    )
}

export default UserProfileShow;