import { useState } from 'react';
import styles from './SignIn.module.css';
import googleLogo from "../assets/googleLogo.svg"
import { auth } from "../services/firebaseConfig.ts";
import { GoogleAuthProvider, signInWithPopup, User, signInWithEmailAndPassword } from 'firebase/auth';

import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);




  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        localStorage.setItem('user', JSON.stringify(result));
        window.location.href = '/';
        user
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const loggedInUser = userCredential.user;
      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className={styles.login}>
        <h2>Entrar</h2>
        <form onSubmit={handleEmailSignIn}>
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
        <div>
          <Link className={styles.createAccount} to='/create-account'>Criar Conta</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
