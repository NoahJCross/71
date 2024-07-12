import Button from "../Button/Button";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import "./header.css";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const handleSearch = (searchTerm) => {};
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="app__header">
      <div className="app__header-brand">
        <h1>DEV@Deakin</h1>
      </div>
      <Search onSearch={handleSearch} />
      <div className="app__header-buttons">
        <Button>Post</Button>
        {user ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
