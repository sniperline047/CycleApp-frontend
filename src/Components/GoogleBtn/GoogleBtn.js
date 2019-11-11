import React from 'react';
import google from '../../Images/google.svg';
import './GoogleBtn.css';

export default function GoogleBtn({onGoogleClick}) {
    return(
        <div className='center' onClick={onGoogleClick}>
            <div className="google-btn">
                <div className="google-icon-wrapper">
                    <img className="google-icon" src={google} alt='google' />
                </div>
                <p className="btn-text"><b>Sign in with google</b></p>
            </div>
        </div>
    );
}
