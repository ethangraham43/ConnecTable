import { useSelector } from 'react-redux';
import './UserProfileShow.css'

function UserProfileShow() {
    const user = useSelector(({session: {user}}) => user ? user : {});

    return (
        <>
            {user.firstName} {user.lastName}
        </>
    )
}

export default UserProfileShow;