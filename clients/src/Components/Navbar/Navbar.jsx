import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useContext } from 'react';
import { mainContext } from '../../Contex/Contex';
const Navbar = () => {
  const { setAuthenticated } = useContext(mainContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem('user'); // Remove user from local storage
    setAuthenticated(false);
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <h1>
                <Link to="/articles">SHARETRADE.com</Link>
              </h1>
            </li>
            <li>
              <div className="userId">
                <button onClick={handleSignOut}>logout</button>
              </div>
              <Link to="/articles/add">Add Data</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
