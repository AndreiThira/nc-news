
const Header = ({user, setUser}) =>{
    

    return(
    <>
    <h1>NC News</h1>
    {user === "" ? "" : <h5 className="logged-in">You are logged in as: {user}  </h5>}
    </>
    )
}

export default Header   