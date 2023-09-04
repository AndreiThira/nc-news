
const Header = ({user, setUser}) =>{
    

    return(
    <>
    <h1>NC News</h1>
    {user === "" ? "" : <h3>You are logged in as: {user}  </h3>}
    </>
    )
}

export default Header   