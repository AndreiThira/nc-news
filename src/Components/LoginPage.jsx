import Header from "./Header";
import { Link } from "react-router-dom";

const LoginPage = ({user, setUser}) => {
  
    const handleSubmit= (event) =>{
        event.preventDefault()
        setUser(username)   
    }

    return (
      <>
        <Header />
        <form onSubmit= {handleSubmit} className="log-in-form">
          <label htmlFor="log-in">Enter your Username</label>
          <input onChange={(e)=>{
            setUser(e.target.value)
          }}type="text" id="log-in"></input>
          <Link to="/articles"><button>Submit</button></Link>
        </form>
      </>
    );
  };
  
  export default LoginPage