import { useContext } from 'react';
import './Welcome.scss';
import { mainContext } from '../../Contex/Contex';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Welcom = () => {
  const {
    isRegistering,
    setIsRegistering,
    registerInformation,
    setRegisterInformation,
    email,
    password,
    setEmail,
    setAuthenticated,
    setPassword,
  } = useContext(mainContext);

  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('user', 'true'); // Set user as authenticated in local storage
      setAuthenticated(true);
      navigate('/articles');
      setEmail('');
      setPassword('');
    } catch (err) {
      alert(err.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerInformation.email !== registerInformation.confirmEmail) {
      alert('Please confirm that email are the same');
      return;
    } else if (
      registerInformation.password !== registerInformation.confirmPassword
    ) {
      alert('Please confirm that password are the same');
      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        registerInformation.email,
        registerInformation.password
      );
      setRegisterInformation({
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
      });
      localStorage.setItem('user', 'true'); // Set user as authenticated in local storage
      setAuthenticated(true);
      navigate('/articles');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="welcome-page">
      <div className="container">
        {isRegistering ? (
          <form className="form" onSubmit={handleRegister}>
            <div className="row">
              <div className="col-12">
                <div className="input-form">
                  <label htmlFor="Email">Email</label>
                  <input
                    id="Email"
                    type="email"
                    placeholder="Email"
                    value={registerInformation.email}
                    onChange={(e) =>
                      setRegisterInformation({
                        ...registerInformation,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-form">
                  <label htmlFor="confirmEmail">Confirm Email</label>
                  <input
                    id="confirmEmail"
                    type="email"
                    placeholder="Confirm Email"
                    value={registerInformation.confirmEmail}
                    onChange={(e) =>
                      setRegisterInformation({
                        ...registerInformation,
                        confirmEmail: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-form">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={registerInformation.password}
                    onChange={(e) =>
                      setRegisterInformation({
                        ...registerInformation,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-form">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={registerInformation.confirmPassword}
                    onChange={(e) =>
                      setRegisterInformation({
                        ...registerInformation,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-btn">
                  <button className="sign-in-register-button">Register</button>
                  <button
                    className="create-account-button"
                    onClick={() => setIsRegistering(false)}>
                    Go back
                  </button>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <form className="form" onSubmit={handleRegister}>
            <div className="row">
              <div className="col-12">
                <div className="input-form">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-form">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="form-btn">
                <button
                  className="sign-in-register-button"
                  onClick={handleSignIn}>
                  Sign In
                </button>
                <button
                  className="create-account-button"
                  onClick={() => setIsRegistering(true)}>
                  Create an account
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Welcom;
