import React, { useEffect } from 'react'
import HomeNavbar from '../components/Home/HomeNavbar'
import Navbar from '../components/Navbar/Navbar'
import '../assets/styles/styles2.css'
import '../assets/styles/styles.css'
import '../assets/styles/default.css'
import '../assets/styles/animate.css'
import '../assets/styles/slick.css'
import logo from '../assets/images/pool_logo.png'
import bgImage2 from '../assets/images/bg.jpg'
import bgImage from '../assets/images/header-hero.jpg'
import footerBg from '../assets/images/footer-bg.jpg'
import newsletterBg from '../assets/images/newsletter-bg.jpg'
import { NavLink, Link } from 'react-router-dom'
export default function HomePage() {
    useEffect(() => {

    }, [])
    return (
        <>
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

            <section class="about-area pt-115">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-9">
                            <div class="about-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.4s", animationName: "fadeInUp" }}>
                                <h6 class="welcome">HOŞ GELDİNİZ</h6>
                                <h3 class="title"><span>10 Yıllık tecrübemiz ile  </span> sizi güzel bir havuz keyfi ile karşılıyoruz.</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="about-image mt-60 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s" style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.5s", animationName: "fadeIn" }}>
                                <img className='rounded' src="https://www.newcastleherald.com.au/images/transform/v1/crop/frm/H4rQr3kwJCDkT9nukzGYK/19a442f9-0877-476b-bccd-bf06d3fb3a36.jpg/r0_461_5760_3712_w1200_h678_fmax.jpg" alt="about" />
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="about-content pt-45">

                                <div class="about-counter pt-60">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="single-counter counter-color-1 mt-30 d-flex wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" >
                                                <div class="counter-shape">
                                                    <span class="shape-1"></span>
                                                    <span class="shape-2"></span>
                                                </div>
                                                <div class="counter-content media-body">
                                                    <span class="counter-count"><span class="counter">3500</span></span>
                                                    <p class="text">Müşteri</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="single-counter counter-color-2 mt-30 d-flex wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s" >
                                                <div class="counter-shape">
                                                    <span class="shape-1"></span>
                                                    <span class="shape-2"></span>
                                                </div>
                                                <div class="counter-content media-body">
                                                    <span class="counter-count"><span class="counter">99</span>%</span>
                                                    <p class="text">Memnuniyet</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="single-counter counter-color-3 mt-30 d-flex wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s" >
                                                <div class="counter-shape">
                                                    <span class="shape-1"></span>
                                                    <span class="shape-2"></span>
                                                </div>
                                                <div class="counter-content media-body">
                                                    <span class="counter-count"><span class="counter">6</span></span>
                                                    <p class="text">Havuz</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="gallery-area pt-115">
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <div class="about-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                            <h2 class="welcome">Ücretsiz üye olarak randevularınızı yönetebilirsiniz.</h2>
                            <h3 class="title">Randevu oluşturabilir, randevunuzu iptal edebilir, yarışmalara katılabilirsiniz.</h3><br />
                            <Link to="/auth/register" class="main-btn">Hemen Üye Olun</Link>
                        </div>

                    </div>
                </div>
            </section>

            <section class="pricing-area pt-115 mb-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-8 col-sm-9">
                            <div class="section-title text-center pb-20 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                                <h6 class="sub-title">Paket Planları</h6>
                                <h4 class="title">En uygun <span> fiyatla paketinizi alabilirsiniz.</span></h4>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters justify-content-center">
                        <div class="col-lg-4 col-md-7 col-sm-9">
                            <div class="single-pricing text-center pricing-color-1 mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div class="pricing-price">
                                    <span class="price"><b>250<span className='symbol fs-1'>₺/3 ay</span></b></span>
                                </div>
                                <div class="pricing-title mt-20">
                                    <h4 class="title">Öğrenci</h4>
                                </div>
                                <div class="pricing-list pt-20">
                                    <ul>
                                        <li>Tüm havuzları kullanabilme</li>
                                        <li>Randevu limiti yok</li>
                                        <li>Öğrenci belgesi zorunlu</li>
                                    </ul>
                                </div>
                                <div class="pricing-btn pt-70">
                                    <Link to="/auth/register" class="main-btn main-btn-2">Hemen Üye Olun !</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-7 col-sm-9">
                            <div class="single-pricing text-center pricing-active pricing-color-2 mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                                <div class="pricing-price">
                                    <span class="price"><b>750<span className='symbol fs-1'>₺/3 ay</span></b></span>
                                </div>
                                <div class="pricing-title mt-20">
                                    <h4 class="title">Bireysel</h4>
                                </div>
                                <div class="pricing-list pt-20">
                                    <ul>
                                        <li>Tüm Havuzları kullanabilme</li>
                                        <li>Limit Yok</li>
                                        <li>Herkes kullanabilir</li>
                                    </ul>
                                </div>
                                <div class="pricing-btn pt-70">
                                    <Link to="/auth/register" class="main-btn" href="#">Hemen Üye Olun !</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-7 col-sm-9">
                            <div class="single-pricing text-center pricing-color-3 mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                                <div class="pricing-price">
                                    <span class="price"><b>1250<span className='symbol fs-1'>₺/3 ay</span></b></span>
                                </div>
                                <div class="pricing-title mt-20">
                                    <h4 class="title">Aile</h4>
                                </div>
                                <div class="pricing-list pt-20">
                                    <ul>
                                        <li>Tüm Havuzları kullanabilme</li>
                                        <li>Limit Yok</li>
                                        <li>En fazla 6 kişilik</li>
                                    </ul>
                                </div>
                                <div class="pricing-btn pt-70">
                                    <Link to="/auth/register" class="main-btn main-btn-2" href="#">Hemen Üye Olun !</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="newsletter-area bg_cover pt-115 pb-120" style={{ backgroundImage: `url(${newsletterBg})` }}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="newsletter-wrapper">
                                <div class="section-title text-center wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <h6 class="sub-title">Sistem</h6>
                                    <h4 class="title">Sisteme kayıtlı havuz paketlerini alarak <span> tüm havuzlarımızdan hizmet alabilirsiniz.</span></h4>
                                </div>
                                {/* <div class="newsletter-form wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <form action="#">
                                        <input type="text" placeholder="Enter your Email ......." />
                                            <button class="main-btn">Subscribe</button>
                                    </form>
                                </div>  */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="footer-area bg_cover" style={{ backgroundImage: `url(${footerBg})` }}>
                <div class="container">
                    <div class="footer-widget pt-30 pb-70">
                        <div class="row">
                            <div class="col-lg-3 col-sm-6 order-sm-1 order-lg-1">
                                <div class="footer-about pt-40">
                                    <a href="#">
                                        <img src={logo} alt="Logo" />
                                    </a>
                                    <p class="text">Biz Ankara merkezli havuz işletme firmasıyız. </p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 order-sm-3 order-lg-2">
                                <div class="footer-link pt-40">
                                    <div class="footer-title">
                                        <h5 class="title">Hizmetler</h5>
                                    </div>
                                    <ul>
                                        <li><a href="#">Yarışmalar</a></li>
                                        <li><a href="#">Etkinlikler</a></li>
                                        <li><a href="#">Eğitimler</a></li>
                                        <li><a href="#">Kişisel Paketler</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 order-sm-4 order-lg-3">
                                <div class="footer-link pt-40">
                                    <div class="footer-title">
                                        <h5 class="title">Hakkımızda</h5>
                                    </div>
                                    <ul>
                                        <li><a href="#">Biz kimiz?</a></li>
                                        <li><a href="#">Kullanım hakları & Gizlilik politikası</a></li>
                                        <li><a href="#">Eğitmenler</a></li>
                                        <li><a href="#">Müşteri Şikayeti</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 order-sm-2 order-lg-4">
                                <div class="footer-contact pt-40">
                                    <div class="footer-title">
                                        <h5 class="title">İletişim</h5>
                                    </div>
                                    <div class="contact pt-10">
                                        <p class="text">Bahçelievler Ankara Gölbaşı</p>
                                        <p class="text">admin@pool.com</p>
                                        <p class="text">+90 545 123 45 67</p>

                                        <ul class="social mt-40">
                                            <li><a href="#"><i class="lni-facebook-filled"></i></a></li>
                                            <li><a href="#"><i class="lni-twitter"></i></a></li>
                                            <li><a href="#"><i class="lni-instagram-original"></i></a></li>
                                            <li><a href="#"><i class="lni-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright text-center">
                        <p class="text">© 2021 Tüm hakları Saklıdır | Yasin Torun.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
