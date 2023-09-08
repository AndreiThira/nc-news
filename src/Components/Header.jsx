
const Header = ({user, setUser}) =>{
    

    return(
        <header>
            <div className="header-title">
            <h1 className="main-title">NC News</h1>
            {user === "" || user === undefined ? "" : <h5 className="logged-in">Logged in as: <span className="username">{user}</span> </h5>}
            </div>
        </header>
   
    )
}

export default Header   