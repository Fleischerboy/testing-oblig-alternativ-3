import { useUserContext } from "../context/userContext";

const UserProfile = () => {

    const {
        user

    } = useUserContext()
    return (
        <>
            <h1 data-testid="profile-welcomemsg">Welcome {user?.name} | email: {user?.email} </h1>
        </>
    )
}

export default UserProfile;