
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Grid, Header, Icon, Image, Message, Segment } from 'semantic-ui-react'

const genderOptions = [
    { key: 'man', value: 'man', text: 'Erkek' },
    { key: 'woman', value: 'woman', text: 'Kadın' },
]

const RegisterPage = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h1' color='teal' textAlign='center'>
                Kayıt Ol
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Eposta adresi' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Parola'
                        type='password'
                    />

                    <Form.Input fluid icon='user' iconPosition='left' placeholder='İsim' />
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Soyisim' />
                    <Form.Select placeholder="Cinsiyetinizi giriniz" options={genderOptions}/>
                    <Button color='teal' fluid size='large'>
                        Kayıt Ol
                    </Button>
                </Segment>
            </Form>
            <Message>
                Zaten üye misin? <NavLink strict to="/auth/login">Giriş Yap</NavLink>
            </Message>
            
            <NavLink to=""><Icon name="arrow left"/> Anasayfaya Dön</NavLink>
        </Grid.Column>
        
    </Grid>
)

export default RegisterPage