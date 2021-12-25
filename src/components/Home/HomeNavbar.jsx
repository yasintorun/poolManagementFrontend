import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import '../../assets/styles/styles2.css'
import '../../assets/styles/styles.css'
import '../../assets/styles/default.css'
import '../../assets/styles/animate.css'
import '../../assets/styles/slick.css'
import logo from '../../assets/images/pool_logo.png'
import bgImage2 from '../../assets/images/bg.jpg'
import bgImage from '../../assets/images/header-hero.jpg'
import { Link } from 'react-router-dom'

export default function HomeNavbar(props) {
    const location = useLocation()

    return (
        <header className="header-area">
                <div className="navbar-area bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="index.html">
                                        <img className='img-fluid' src={logo} width={220} height={"auto"} alt="Logo" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul className="navbar-nav m-auto">
                                            <li className={"nav-item " + (location.pathname == '/' ? "active":"")}>
                                                <Link to="/">Anasayfa</Link>
                                            </li>
                                            <li className={"nav-item " + (location.pathname == '/about' ? "active":"")}>
                                                <Link to="/">Hakkımızda </Link>
                                            </li>
                                            <li className={"nav-item " + (location.pathname=='/contact' ? "active":"")}>
                                                <Link to="/contact">İletişim</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="navbar-user">
                                        <ul>
                                            <li><Link to="/auth/login" className="login">Giriş Yap</Link></li>
                                            <li><Link to="/auth/register">Üye Ol</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {props.children}
            </header>
    )
}
