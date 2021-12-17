
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Grid, Header, Icon, Image, Message, Segment } from 'semantic-ui-react'
import AuthPage from '../components/AuthPage'
import logo from '../assets/images/pool_logo.png'

const genderOptions = [
    { key: 'man', value: '1', text: 'Erkek' },
    { key: 'woman', value: '0', text: 'Kadın' },
]

function RegisterPage() {

    return (
        <AuthPage>
            <div className="">
                <div className="text-center my-3 mb-5">
                    <img className="img-fluid" src={logo} /> {/*ToDo: Buradaki logoyu değiştir.*/}
                    <h2 className="fw-lighter">Hemen Üye Olun</h2>
                </div>
                <Form size='large'>
                    <Form.Field>
                        <label>Eposta Adresi</label>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Eposta adresi' />
                    </Form.Field>
                    <Form.Field>
                        <label>Şifre</label>
                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Parola' type='password' />
                    </Form.Field>
                    <Form.Field>
                        <label>İsim</label>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='İsim' />
                    </Form.Field>
                    <Form.Field>
                        <label>Soyisim</label>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Soyisim' />
                    </Form.Field>
                    <Form.Field>
                        <label>Cinsiyet</label>
                        <Form.Select placeholder="Cinsiyetinizi giriniz" options={genderOptions} />
                    </Form.Field>
                    <button className="auth-btn">
                        Kayıt Ol
                    </button>
                </Form>
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



// <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
//     <Grid.Column style={{ maxWidth: 450 }}>
//         <Header as='h1' color='teal' textAlign='center'>
//             Kayıt Ol
//         </Header>
//         <Form size='large'>
//             <Segment stacked>
//                 <Form.Input fluid icon='user' iconPosition='left' placeholder='Eposta adresi' />
//                 <Form.Input
//                     fluid
//                     icon='lock'
//                     iconPosition='left'
//                     placeholder='Parola'
//                     type='password'
//                 />

//                 <Form.Input fluid icon='user' iconPosition='left' placeholder='İsim' />
//                 <Form.Input fluid icon='user' iconPosition='left' placeholder='Soyisim' />
//                 <Form.Select placeholder="Cinsiyetinizi giriniz" options={genderOptions}/>
//                 <Button color='teal' fluid size='large'>
//                     Kayıt Ol
//                 </Button>
//             </Segment>
//         </Form>
//         <Message>
//             Zaten üye misin? <NavLink strict to="/auth/login">Giriş Yap</NavLink>
//         </Message>

//         <NavLink to=""><Icon name="arrow left"/> Anasayfaya Dön</NavLink>
//     </Grid.Column>

// </Grid>


export default RegisterPage