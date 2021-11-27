import React from 'react'
import '../assets/styles/auth.css'
export default function AuthPage(props) {
    return (
        <div className="auth-page d-flex justify-content-center align-items-center">
            <div className="">
                <div className="auth-form">
                    <div className="p-5">
                        {props.children}
                    </div>
                </div>
            </div>

        </div>
    )
}
