import React, { useState } from 'react'
import _ from 'lodash'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            content='Imagine-a-Company'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content='Do whatever you want when you want to.'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        <Button primary size='huge'>
            Get Started
            <Icon name='right arrow' />
        </Button>
    </Container>
)



export default function HomePage() {
    const [fixed, setFixed] = useState(false)
    let hideFixedMenu = () => setFixed(false)
    let showFixedMenu = () => setFixed(true)



    return (
        <div>
            <Visibility
                once={false}
                onBottomPassed={() => showFixedMenu()}
                onBottomPassedReverse={() => hideFixedMenu()}
            >
                <Segment
                    inverted
                    textAlign='center'
                    style={{ minHeight: 700, padding: '1em 0em' }}
                    vertical
                >
                    <Menu
                        fixed={fixed ? 'top' : null}
                        inverted={!fixed}
                        pointing={!fixed}
                        secondary={!fixed}
                        size='large'
                    >
                        <Container>
                            <Menu.Item as='a' active>
                                Home
                            </Menu.Item>
                            <Menu.Item as='a'>Work</Menu.Item>
                            <Menu.Item as='a'>Company</Menu.Item>
                            <Menu.Item as='a'>Careers</Menu.Item>
                            <Menu.Item position='right'>
                                <Button  as={NavLink} to="/auth/login" inverted={!fixed} >
                                    Giriş Yap
                                </Button>
                                <Button as={NavLink} to="/auth/register" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                    Kayıt Ol
                                </Button>
                            </Menu.Item>
                        </Container>
                    </Menu>
                    <HomepageHeading />
                </Segment>
            </Visibility>

            <Segment>
                {_.map(
                    [
                        'https://react.semantic-ui.com/images/wireframe/centered-paragraph.png',
                        'https://react.semantic-ui.com/images/wireframe/short-paragraph.png',
                        'https://react.semantic-ui.com/images/wireframe/media-paragraph.png',
                        'https://react.semantic-ui.com/images/wireframe/paragraph.png',
                        'https://react.semantic-ui.com/images/wireframe/centered-paragraph.png',
                        'https://react.semantic-ui.com/images/wireframe/short-paragraph.png',
                        'https://react.semantic-ui.com/images/wireframe/media-paragraph.png',
                        'https://react.semantic-ui.com/images/wireframe/paragraph.png',
                        'https://react.semantic-ui.com/images/wireframe/centered-paragraph.png',
                        'https://react.semantic-ui.com/images/wireframe/short-paragraph.png',
                        'https://react.semantic-ui.com/images/wireframe/media-paragraph.png',
                    ],
                    (src, index, images) => (
                        <React.Fragment key={index}>
                            <Image src={src} />
                            {index !== images.length - 1 && <Divider />}
                        </React.Fragment>
                    ),
                )}
            </Segment>
        </div>
    )
}
