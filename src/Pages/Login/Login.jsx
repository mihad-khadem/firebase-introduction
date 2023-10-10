import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.init";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user
            console.log(user);
        })
        .catch(err => {
            console.log('Error' , err.code, err.message);
        })
    }
    return (
        <div>
            <div>
                <button onClick={() => handleGoogleSignIn()} className="login-btn">Google Login</button>
            </div>
        </div>
    );
};

export default Login;