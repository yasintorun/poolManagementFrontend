import React from 'react'

import '../../assets/styles/styles2.css'
import '../../assets/styles/styles.css'
import '../../assets/styles/default.css'
import '../../assets/styles/animate.css'
import logo from '../../assets/images/pool_logo.png'
import footerBg from '../../assets/images/footer-bg.jpg'

export default function HomeFooter() {
    return (
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
    )
}
