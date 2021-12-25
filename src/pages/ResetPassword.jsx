import React from 'react'
import AuthPage from '../components/AuthPage'
import logo from '../assets/images/pool_logo.png'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import { Form } from 'semantic-ui-react'
import * as Yup from 'yup'
import YTInput from '../utilities/customs/YTInput'
import { useDispatch } from 'react-redux'
import AccountService from '../services/AccountService'
import AuthService from '../services/authService'
import Helper from '../utilities/Helper'
import Spinner from '../components/Spinner'
export default function ResetPassword() {
    const initialValues = { accountId: 0, oldPassword: "", newPassword: "", newPasswordRepeat: "" };
    const schema = Yup.object().shape({
        oldPassword: Yup.string().required("Eski şifre zorunlu"),
        newPassword: Yup.string().required("Yeni Şifre zorunlu"),
        newPasswordRepeat: Yup.string().required("Yeni Şifre tekrarı zorunlu"),
    });

    return (
        <>
            <AuthPage style={{backgroundColor: "transparent"}}>
                <div class="text-center mb-3">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <h4 class="text-center mb-4">Şifremi Yenile</h4>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        values.accountId = AuthService.getAuth().accountId
                        let accountService = new AccountService()
                        accountService.changePassword(values).then(result => {
                            console.log(result)
                            Helper.ResultMessage(result)
                        })

                    }}
                >
                    {props => (
                        <Form size='large' onSubmit={() => props.submitForm()}>
                            <Form.Field>
                                <label>Eski Şifre</label>
                                <YTInput name="oldPassword" type="password" placeholder='Eski şifre' />
                            </Form.Field>
                            <Form.Field>
                                <label>Yeni Şifre</label>
                                <YTInput name="newPassword" type="password" placeholder='Yeni şifre' />
                            </Form.Field>
                            <Form.Field>
                                <label>Yeni Şifre Tekrar</label>
                                <YTInput name="newPasswordRepeat" type="password" placeholder='Yeni şifre' />
                            </Form.Field>


                            <button type='submit' className="auth-btn">
                                Şifremi Yenile
                            </button>
                        </Form>
                    )}
                </Formik>

            </AuthPage >
        </>
    )
}
