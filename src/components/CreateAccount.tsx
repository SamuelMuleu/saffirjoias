import { useState } from 'react';
import styles from './CreateAccounts.module.css';
import googleLogo from "../assets/googleLogo.svg";
import { auth, firestore } from "../services/firebaseConfig.ts";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, User, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';
import userProfile from "../assets/user.jpg"
import { doc, setDoc } from 'firebase/firestore';




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string>('');


    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                localStorage.setItem('user', JSON.stringify(result.user));

            })
            .catch((error) => {
                console.log(error);
                setError('Erro ao fazer login com o Google');
            });
    };

    const saveUserData = async (userId: string, userData: any) => {
        const userRef = doc(firestore, 'users', userId);

        try {
            await setDoc(userRef, userData);

        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };

    const handleCreateAccount = async (e: React.FormEvent) => {
        e.preventDefault();
       
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (result) => {

                await updateProfile(result.user, { displayName: name, photoURL: userProfile });
                await saveUserData(result.user.uid, { displayName: name, email: email, role: 'admin' });
                setUser(result.user);
                localStorage.setItem('user', JSON.stringify(result.user));
                window.location.href = '/';
                user
            })

            .catch((error) => {
                console.log(error);
                setError('Erro ao criar conta');
            });
    };
    console.log(user)


    return (
        <div>
            <div className={styles.login}>
                <h2>Criar Conta</h2>
                <form onSubmit={handleCreateAccount}>
                    <div className={styles.formGroup}>

                        <label htmlFor="name">Nome:</label>
                        <input
                            className={styles.inputName}
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
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
                    {error && <p className={styles.error}>{error}</p>}
                    <button className={styles.button} type="submit">Criar Conta</button>
                </form>
                <button className={styles.googleButton} onClick={handleGoogleSignIn}>
                    <img src={googleLogo} alt="Google Icon" className={styles.googleIcon} />
                    Entrar com o Google
                </button>
                <Link to="/signin" className={styles.createAccount}>Login</Link>
            </div>
        </div>
    );
}

export default Login;
