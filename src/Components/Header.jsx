
const Header = ({user, setUser}) =>{
    

    return(
    <>
    <h1>NC News</h1>
    {user === "" ? "" : <h8 className="logged-in">You are logged in as: {user}  </h8>}
    </>
    )
}

export default Header   