import React from 'react'
import logo from '../../assets/images/pool_logo.png'

export default function HomeNavbar() {
    return (
        <header className="navigation fixed-top bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand font-tertiary h3" href="index.html">
                    <img className='img-fluid' width={220} height={120} src={logo} alt="Myself" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                    aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-center" id="navigation">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="blog.html">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="portfolio.html">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
