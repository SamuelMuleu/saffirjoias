import { useState } from 'react';

import styles from './SignIn.module.css';
import googleLogo from "../assets/googleLogo.svg"
import { auth } from "../services/firebaseConfig.ts";
import { useHistory } from "react-router-dom";

import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';




const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User>({} as User);



  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        localStorage.setItem('user', JSON.stringify(result));
        history.push("/");


      })
      .catch((error) => {
        console.log(error);
      })
  }
  console.log(user)
  return (
    <div>
      <div className={styles.login}>
        <h2>Sign In</h2>
        <form >
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className={styles.button} type="submit">Login</button>
        </form>
        <button className={styles.googleButton} onClick={handleGoogleSignIn}>
          <img src={googleLogo} alt="Google Icon" className={styles.googleIcon} />
          Entrar com o Google
        </button>

      </div>
    </div>
  )
}

export default Login
