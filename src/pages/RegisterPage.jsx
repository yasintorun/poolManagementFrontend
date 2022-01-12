
import React from 'react'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Button, Form, Grid, Header, Icon, Image, Message, Segment } from 'semantic-ui-react'
import AuthPage from '../components/AuthPage'
import logo from '../assets/images/pool_logo.png'
import { Formik } from 'formik'
import * as Yup from 'yup'
import YTInput from '../utilities/customs/YTInput'
import { useDispatch } from 'react-redux'
import { register } from '../store/actions/authActions'
import Helper from '../utilities/Helper'
const genderOptions = [
    { key: 'man', value: '1', text: 'Erkek' },
    { key: 'woman', value: '0', text: 'Kadın' },
]

function RegisterPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const initialValues = { email: "asd", password: "", firstname:"", lastname:"", gender: 1 };

    const schema = Yup.object().shape({
        email: Yup.string().required("Eposta zorunlu").email("Eposta adresi hatalı"),
        password: Yup.string().required("Şifre zorunlu"),
        firstname: Yup.string().required("İsim zorunlu"),   
        lastname: Yup.string().required("Soyisim zorunlu"),
    })

    return (
        <AuthPage>
            <div className="">
                <div className="text-center my-3 mb-5">
                    <img className="img-fluid" src={logo} /> {/*ToDo: Buradaki logoyu değiştir.*/}
                    <h2 className="fw-lighter">Hemen Üye Olun</h2>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={value => {
                        Helper.setCallBack(() => dispatch(register(value))).then(r => {
                            history.push("/auth/login")
                        })
                    }}
                > 
                {props => (
                    <Form size='large'>
                        <Form.Field>
                            <label>Eposta Adresi</label>
                            <YTInput  name="email" fluid icon='user' iconPosition='left' placeholder='Eposta adresi'/>
                        </Form.Field>
                        <Form.Field>
                            <label>Şifre</label>
                            <YTInput name="password" fluid icon='lock' iconPosition='left' placeholder='Parola' type='password' />
                        </Form.Field>
                        <Form.Field>
                            <label>İsim</label>
                            <YTInput name="firstname" fluid icon='user' iconPosition='left' placeholder='İsim' />
                        </Form.Field>
                        <Form.Field>
                            <label>Soyisim</label>
                            <YTInput name="lastname" fluid icon='user' iconPosition='left' placeholder='Soyisim' />
                        </Form.Field>
                        <Form.Field>
                            <label>Cinsiyet</label>
                            <Form.Select onChange={(e, { value }) => props.setFieldValue("gender", value)} placeholder="Cinsiyetinizi giriniz" options={genderOptions} />
                        </Form.Field>
                        <button className="auth-btn" onClick={props.submitForm}>
                            Kayıt Ol
                        </button>
                    </Form>
                )}
                </Formik>
                <div className="text-center my-2">
                    <div className="py-2">
                        Zaten üye misin? <NavLink strict to="/auth/login">Giriş Yap</NavLink>
                    </div>
                    <div className="mt-3">
                        <NavLink to=""><Icon name="arrow left" />Anasayfaya Dön</NavLink>
                    </div>
                </div>
            </div>
        </AuthPage>
    )
}

export default RegisterPage