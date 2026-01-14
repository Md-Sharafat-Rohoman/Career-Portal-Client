import Lottie from 'lottie-react';
import React, { use } from 'react';
import registrationAnimation from '../../assets/Login.json';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import SocialLogin from '../../shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router';

const SignIn = () => {

    const { signIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log('SignIn Location:', location.state);
    const from = location.state || '/';
    console.log('SignIn From:', from);


    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate( '/');
                // form.reset();

            })
            .catch(err => console.log(err));
    }


    // Add sign-in logic here
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie style={{ width: '200px', height: '200px' }} animationData={registrationAnimation} />

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">SignIn now!</h1>
                        <form onSubmit={handleSignIn} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">SignIn</button>
                        </form>
                        <div className='text-center'>
                            <div className="divider">OR</div>
                            <SocialLogin from={from}></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;