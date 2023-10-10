import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider()
    const [user, setUser] = useState(null)


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const logedInUser = result.user
            console.log(logedInUser);
            setUser(logedInUser)
        })
        .catch(err => {
            console.log('Error' , err.code, err.message);
        })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitProvider)
        .then(result => {
            const logedInUser = result.user
            console.log(logedInUser);
            setUser(logedInUser);
        })
        .catch(err => console.log(err))
    }
    const handleSignOut = () => {
        signOut(auth)
        .then(result => {
            setUser(null)
            console.log(result);
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div>
                {
                    user ? <button onClick={handleSignOut} className="login-btn">Sign out</button> : 
                    <div>
                        <button onClick={() => handleGoogleSignIn()} className="login-btn">Google Login</button>
                        <button onClick={() => handleGithubSignIn()}  className="login-btn">GitHub Login</button>
                    </div> 
                    
                }
            </div>
            {
                user && <div>
                    <h2>User Name : {user.displayName}</h2>
                    <p>user email {user.email}</p>
                    <img src={user.photoURL} alt="" />
                     </div>
            }
        </div>
    );
};

export default Login;