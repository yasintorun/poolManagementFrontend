import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import HomeFooter from '../components/Home/HomeFooter'
import HomeNavbar from '../components/Home/HomeNavbar'
import * as Yup from 'yup'
import bgImage from '../assets/images/page-banner-1.jpg'
import YTInput from '../utilities/customs/YTInput'
import MessageService from '../services/messageService'
import {SuccessAlert} from '../utilities/AlertMessages/YTAlerts'
import Spinner from '../components/Spinner'
export default function ContactPage() {
    const [loading, setLoading] = useState(true)
    const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: "",
    }

    const schema = Yup.object().shape({
        name: Yup.string().required("Adınız zorunlu").min(5, "Adınız en az 5 karakter olabilir").max(50, "Adınız en fazla 50 karakter olabilir"),
        email: Yup.string().required("Mail adresiniz zorunlu").min(10, "Mail adresi minimum 10 karakter olabilir"),
        subject: Yup.string().required("Konu başlığı zorunlu").min(6, "Konu başlığı en az 6 karakter olmalı").max(50, "Konu başlığı en fazla 50 karakter olmalı"),
        message: Yup.string().required("Mesaj alanı zorunlu").min(20, "Mesajınız en az 20 karakter içermelidir").max(250, "Mesajınız en fazla 250 karakter olabilir"),
    });

    const handleSubmit = val => {
        setLoading(true)
        const messageService = new MessageService()
        messageService.sendMessage(val).then(result => {
            console.log(result)
            setLoading(false)
            SuccessAlert("Mesaj Gönderildi", "En kısa sürede dönüş yapılacaktır")
        })
    }

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <>
            <Spinner loading={loading}/>
            <HomeNavbar>
                <div className="page-banner bg_cover" style={{ backgroundImage: `url(${bgImage})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="page-banner-content wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <h3 className="page-title"><b>Her alanda</b> bizimle <span>iletişim kurun.</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HomeNavbar>
            <section className="contact-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-map  wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.3s">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.317935841218!2d32.805203015693245!3d39.799859600847434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34162904a0aef%3A0xd50e9551cf1e1013!2zxZ5hZmFrLCA4NTUuIFNrLiBHw7ZsYmHFn8SxIEJsZC4gRmVuIMSwxZ9sLiBNZC4gTm86NiwgMDY4MzAgR8O2bGJhxZ_EsS9BbmthcmE!5e0!3m2!1str!2str!4v1640360938556!5m2!1str!2str" width="600" height="450" frameBorder={0} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="contact-info pt-30">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-contact-info contact-color-1 mt-30 d-flex  wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" >
                                    <div className="contact-info-icon">
                                        <i className="bi bi-geo-alt"></i>
                                    </div>
                                    <div className="contact-info-content media-body">
                                        <p className="text">Bahçelievler Mahallesi 35. Cadde <br /> Gölbaşı, Ankara.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-contact-info contact-color-2 mt-30 d-flex  wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s" >
                                    <div className="contact-info-icon">
                                        <i className="bi bi-envelope"></i>
                                    </div>
                                    <div className="contact-info-content media-body">
                                        <p className="text">poolmanagement@gmail.com</p>
                                        <p className="text">info@pool.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-contact-info contact-color-3 mt-30 d-flex  wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
                                    <div className="contact-info-icon">
                                        <i className="bi bi-telephone"></i>
                                    </div>
                                    <div className="contact-info-content media-body">
                                        <p className="text">+90 544 123 1223</p>
                                        <p className="text">+90 312 567 8900</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-wrapper-form pt-115  wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s" >
                                <h4 className="contact-title pb-10"><i className="bi bi-envelope"></i> Mesaj <span>Gönder</span></h4>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={schema}
                                    onSubmit={(values) => {
                                        handleSubmit(values)
                                    }}
                                >
                                    {props => (
                                        <Form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="contact-form mt-45">
                                                        <label>İsim Soyisim</label>
                                                        <YTInput type="text" name="name" placeholder="İsim Soyisim :" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="contact-form mt-45">
                                                        <label>Mail Adresi</label>
                                                        <YTInput type="email" name="email" placeholder="Mail Adresi :" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="contact-form mt-45">
                                                        <label>Konu Başlığı</label>
                                                        <YTInput type="text" name="subject" placeholder="Konu Başlığı :" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="contact-form mt-45">
                                                        <label>Mesaj</label>
                                                        <TextArea onChange={(event, data) => props.setFieldValue("message", data.value)} name="message" placeholder="Mesajınızı Giriniz.." />

                                                    </div>
                                                </div>
                                                <p className="form-message"></p>
                                                <div className="col-md-12">
                                                    <div className="contact-form mt-45">
                                                        <button type="button" onClick={props.submitForm} className="main-btn">Mesaj Gönder</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    )}

                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HomeFooter />
        </>
    )
}
