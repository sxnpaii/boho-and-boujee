import React from 'react';
import "./signUp.scss";

function SignUp() {
    return (
        <section className="innerSignUp" >
            <div className="text">
                <h2 className="display-1">Sign up and Save</h2>
                <p className='h4'>Sign up for my email newsletter for special offers.</p>
            </div>
            <form action="">
                <input type="email" placeholder='name@example.com' />
                <button>Sign UP</button>
            </form>
        </section>
    )
}

export default SignUp;
