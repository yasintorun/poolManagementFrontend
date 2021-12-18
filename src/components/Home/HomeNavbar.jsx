import React from 'react'

import '../../assets/styles/styles2.css'
import '../../assets/styles/styles.css'
import '../../assets/styles/default.css'
import '../../assets/styles/animate.css'
import '../../assets/styles/slick.css'
import logo from '../../assets/images/pool_logo.png'
import bgImage2 from '../../assets/images/bg.jpg'
import bgImage from '../../assets/images/header-hero.jpg'
import { Link } from 'react-router-dom'

export default function HomeNavbar() {
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
                                            <li className="nav-item active">
                                                <Link to="/">Anasayfa</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/">Hakkımızda </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/">İletişim</Link>
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

                <div className="bg_cover" style={{ backgroundImage: `url(${bgImage})` }}>
                    <div className="header-hero bg_cover d-lg-flex align-items-center" style={{ backgroundColor: "transparent" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="header-hero-content">
                                        <h1 className="hero-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s"><b>Yasin Torun</b> <br /><span>Pool Management</span><br /> Ücretsiz <b>Üye Olun.</b></h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-hero-image d-flex align-items-center wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="1.1s">
                        <div class="image">
                            <img className="rounded" src={bgImage2} alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </header>
    )
}
