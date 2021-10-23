
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Form, Grid, Header, Icon, Image, Message, Segment } from 'semantic-ui-react'

const LoginPage = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h1' color='teal' textAlign='center'>
                Giriş Yap
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

                    <Button color='teal' fluid size='large'>
                        Giriş Yap
                    </Button>
                </Segment>
            </Form>
            <Message>
                Hesabın yok mu? <NavLink strict to="/auth/register">Kayıt Ol</NavLink>
            </Message>
            <NavLink to=""><Icon name="arrow left"/>Anasayfaya Dön</NavLink>
        </Grid.Column>
    </Grid>
)

export default LoginPage