
import { Formik } from 'formik';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { Button, Form, Grid, Header, Icon, Image, Label, Message, Segment } from 'semantic-ui-react'
import * as Yup from 'yup'
import AuthService from '../services/authService';
import { login } from '../store/actions/authActions';
import AuthPage from '../components/AuthPage';
export default function LoginPage() {

    const initialValues = { email: "", password: "" };

    const schema = Yup.object().shape({
        email: Yup.string().required("Eposta zorunlu").email("Eposta adresi hatalı"),
        password: Yup.string().required("Şifre zorunlu"),
    });

    const auth = useSelector(state => state.auth)
    const history = useHistory()
    const dispatch = useDispatch()
    const loginSubmit = (values) => {
        // let authService = new AuthService()
        // authService.login(values)
        dispatch(login(values))
    }

    useEffect(() => {
        if (auth.data)
            history.push("/dashboard")
    }, [auth.data])

    return (
        <AuthPage>
            <div className="">
                <div className="text-center my-3 mb-5">
                    <img src="https://jobick.dexignlab.com/xhtml/images/logo-full.png" /> {/*ToDo: Buradaki logoyu değiştir.*/}
                    <h2 className="fw-lighter">Hesabınızla giriş yapın</h2>
                </div>
                <div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            loginSubmit(values)
                        }}
                    >
                        {props => (
                            <Form size='large' loading={auth.loading}>

                                <Form.Field>
                                    <label>Kullanıcı Adı</label>
                                    <Form.Input onChange={(event, data) => { props.setFieldValue("email", data.value) }} fluid icon='user' iconPosition='left' placeholder='Eposta adresi' />
                                </Form.Field>

                                <Form.Field>
                                    <label>Şifre</label>
                                    <Form.Input onChange={(event, data) => { props.setFieldValue("password", data.value) }} name="password" fluid icon='lock' iconPosition='left' placeholder='Parola' type='password' />
                                </Form.Field>
                                <Form.Field className="d-flex justify-content-end">
                                    <a href="#" className="">Şifremi Unuttum</a>
                                </Form.Field>
                                <button className="auth-btn" onClick={() => props.submitForm()}>
                                    Giriş Yap
                                </button>

                            </Form>
                        )}
                    </Formik>

                </div>
                <div className="text-center my-2">
                    {!!auth.error && <Message error content="Kullanıcı Adı veya Şifre Hatalı" />}
                    <div className="py-2">
                        Hesabın yok mu? <NavLink strict to="/auth/register">Kayıt Ol</NavLink>
                    </div>
                    <div className="mt-3">
                        <NavLink to=""><Icon name="arrow left" />Anasayfaya Dön</NavLink>
                    </div>
                </div>
            </div>
        </AuthPage>
    )
    // return (
    //     <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    //         <Grid.Column style={{ maxWidth: 450 }}>
    //             <Header as='h1' color='teal' textAlign='center'>
    //                 Giriş Yap
    //             </Header>
    //             <Formik
    //                 initialValues={initialValues}
    //                 validationSchema={schema}
    //                 onSubmit={(values) => {
    //                     loginSubmit(values)
    //                 }}
    //             >
    //                 {props => (
    //                     <Form size='large' loading={auth.loading}>
    //                         <Segment stacked>
    //                             <Form.Input onChange={(event, data) => {props.setFieldValue("email", data.value)}} fluid icon='user' iconPosition='left' placeholder='Eposta adresi' />
    //                             <Form.Input onChange={(event, data) => {props.setFieldValue("password", data.value)}} name="password" fluid icon='lock' iconPosition='left' placeholder='Parola' type='password' />

    //                             <Button color='teal' fluid size='large' onClick={()=>props.submitForm()}>
    //                                 Giriş Yap
    //                             </Button>
    //                         </Segment>
    //                     </Form>
    //                 )}
    //             </Formik>

    //             {!!auth.error&& <Message error content="Kullanıcı Adı veya Şifre Hatalı" />}
    //             <Message>
    //                 Hesabın yok mu? <NavLink strict to="/auth/register">Kayıt Ol</NavLink>
    //             </Message>
    //             <NavLink to=""><Icon name="arrow left" />Anasayfaya Dön</NavLink>
    //         </Grid.Column>
    //     </Grid>
    // )
}