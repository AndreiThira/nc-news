import Header from "./Header";
import { Link } from "react-router-dom";

const LoginPage = ({ user, setUser }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(username);
  };

  return (
    <>
      <Header />
      <div className="log-in-form">
        <form onSubmit={handleSubmit}>
          <label className="login-label" htmlFor="log-in">
            Enter your Username
          </label>
          <input
            className="login-input"
            onChange={(e) => {
              setUser(e.target.value);
            }}
            type="text"
            id="log-in"
            name="username"
          ></input>
          <div className="login-button-container">
          <Link to="/articles">
            <button className="button-32">Submit</button>
            </Link>

          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
