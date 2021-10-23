import React from 'react'
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const SidebarExampleSidebar = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </Grid.Column>

      <Grid.Column>
          <Sidebar
            as={Menu}
            icon='labeled'
            inverted
            vertical
            visible={true}
            width="thin"
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
            <Segment>
              <Header as='h3'>Application Content</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default SidebarExampleSidebar