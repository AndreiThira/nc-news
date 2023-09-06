
const Header = ({user, setUser}) =>{
    

    return(
    <>
    <h1>NC News</h1>
    {console.log(user)}
    {user === "" ? "" : <h5 className="logged-in">You are logged in as: {user}  </h5>}
    </>
    )
}

export default Header   