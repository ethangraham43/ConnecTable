import './UserProfileShow.css'

function UserProfileShow({user}) {

    return (
        <>
            {user.firstName} {user.lastName}
        </>
    )
}

export default UserProfileShow;