const ProfilePage = ({history}) => {

    const logout = () => {
        localStorage.removeItem("authToken");
        history.push('/');
        history.go(0);
    }

    return (
        <button onClick = {logout}> Logout </button>
    )
}

export default ProfilePage;