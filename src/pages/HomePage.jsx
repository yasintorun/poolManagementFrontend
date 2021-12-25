import React, { useEffect } from 'react'
import HomeNavbar from '../components/Home/HomeNavbar'
import Navbar from '../components/Navbar/Navbar'
import '../assets/styles/styles2.css'
import '../assets/styles/styles.css'
import '../assets/styles/default.css'
import '../assets/styles/animate.css'
import '../assets/styles/slick.css'
import bgImage2 from '../assets/images/bg.jpg'
import bgImage from '../assets/images/header-hero.jpg'
import newsletterBg from '../assets/images/newsletter-bg.jpg'
import { NavLink, Link } from 'react-router-dom'
import HomeFooter from '../components/Home/HomeFooter'
export default function HomePage() {
    useEffect(() => {

    }, [])
    return (
        <>
            <HomeNavbar>
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
                    <div className="header-hero-image d-flex align-items-center wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="1.1s">
                        <div className="image">
                            <img className="rounded" src={bgImage2} alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </HomeNavbar>

            <section className="about-area pt-115">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="about-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.4s", animationName: "fadeInUp" }}>
                                <h6 className="welcome">HOŞ GELDİNİZ</h6>
                                <h3 className="title"><span>10 Yıllık tecrübemiz ile  </span> sizi güzel bir havuz keyfi ile karşılıyoruz.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-image mt-60 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s" style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.5s", animationName: "fadeIn" }}>
                                <img className='rounded' src="https://www.newcastleherald.com.au/images/transform/v1/crop/frm/H4rQr3kwJCDkT9nukzGYK/19a442f9-0877-476b-bccd-bf06d3fb3a36.jpg/r0_461_5760_3712_w1200_h678_fmax.jpg" alt="about" />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="about-content pt-45">

                                <div className="about-counter pt-60">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="single-counter counter-color-1 mt-30 d-flex wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" >
                                                <div className="counter-shape">
                                                    <span className="shape-1"></span>
                                                    <span className="shape-2"></span>
                                                </div>
                                                <div className="counter-content media-body">
                                                    <span className="counter-count"><span className="counter">3500</span></span>
                                                    <p className="text">Müşteri</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="single-counter counter-color-2 mt-30 d-flex wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s" >
                                                <div className="counter-shape">
                                                    <span className="shape-1"></span>
                                                    <span className="shape-2"></span>
                                                </div>
                                                <div className="counter-content media-body">
                                                    <span className="counter-count"><span className="counter">99</span>%</span>
                                                    <p className="text">Memnuniyet</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="single-counter counter-color-3 mt-30 d-flex wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s" >
                                                <div className="counter-shape">
                                                    <span className="shape-1"></span>
                                                    <span className="shape-2"></span>
                                                </div>
                                                <div className="counter-content media-body">
                                                    <span className="counter-count"><span className="counter">6</span></span>
                                                    <p className="text">Havuz</p>
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
            <section className="gallery-area pt-115">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="about-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                            <h2 className="welcome">Ücretsiz üye olarak randevularınızı yönetebilirsiniz.</h2>
                            <h3 className="title">Randevu oluşturabilir, randevunuzu iptal edebilir, yarışmalara katılabilirsiniz.</h3><br />
                            <Link to="/auth/register" className="main-btn">Hemen Üye Olun</Link>
                        </div>

                    </div>
                </div>
            </section>

            <section className="pricing-area pt-115 mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-8 col-sm-9">
                            <div className="section-title text-center pb-20 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                                <h6 className="sub-title">Paket Planları</h6>
                                <h4 className="title">En uygun <span> fiyatla paketinizi alabilirsiniz.</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters justify-content-center">
                        <div className="col-lg-4 col-md-7 col-sm-9">
                            <div className="single-pricing text-center pricing-color-1 mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="pricing-price">
                                    <span className="price"><b>250<span className='symbol fs-1'>₺/3 ay</span></b></span>
                                </div>
                                <div className="pricing-title mt-20">
                                    <h4 className="title">Öğrenci</h4>
                                </div>
                                <div className="pricing-list pt-20">
                                    <ul>
                                        <li>Tüm havuzları kullanabilme</li>
                                        <li>Randevu limiti yok</li>
                                        <li>Öğrenci belgesi zorunlu</li>
                                    </ul>
                                </div>
                                <div className="pricing-btn pt-70">
                                    <Link to="/auth/register" className="main-btn main-btn-2">Hemen Üye Olun !</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-7 col-sm-9">
                            <div className="single-pricing text-center pricing-active pricing-color-2 mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                                <div className="pricing-price">
                                    <span className="price"><b>750<span className='symbol fs-1'>₺/3 ay</span></b></span>
                                </div>
                                <div className="pricing-title mt-20">
                                    <h4 className="title">Bireysel</h4>
                                </div>
                                <div className="pricing-list pt-20">
                                    <ul>
                                        <li>Tüm Havuzları kullanabilme</li>
                                        <li>Limit Yok</li>
                                        <li>Herkes kullanabilir</li>
                                    </ul>
                                </div>
                                <div className="pricing-btn pt-70">
                                    <Link to="/auth/register" className="main-btn" href="#">Hemen Üye Olun !</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-7 col-sm-9">
                            <div className="single-pricing text-center pricing-color-3 mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                                <div className="pricing-price">
                                    <span className="price"><b>1250<span className='symbol fs-1'>₺/3 ay</span></b></span>
                                </div>
                                <div className="pricing-title mt-20">
                                    <h4 className="title">Aile</h4>
                                </div>
                                <div className="pricing-list pt-20">
                                    <ul>
                                        <li>Tüm Havuzları kullanabilme</li>
                                        <li>Limit Yok</li>
                                        <li>En fazla 6 kişilik</li>
                                    </ul>
                                </div>
                                <div className="pricing-btn pt-70">
                                    <Link to="/auth/register" className="main-btn main-btn-2" href="#">Hemen Üye Olun !</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsletter-area bg_cover pt-115 pb-120" style={{ backgroundImage: `url(${newsletterBg})` }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="newsletter-wrapper">
                                <div className="section-title text-center wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <h6 className="sub-title">Sistem</h6>
                                    <h4 className="title">Sisteme kayıtlı havuz paketlerini alarak <span> tüm havuzlarımızdan hizmet alabilirsiniz.</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <HomeFooter />
        </>
    )
}
