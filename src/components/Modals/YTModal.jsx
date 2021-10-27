import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default function YTModal({header, icon, trigger, buttonName, click, children}) {

  const [open, setOpen] = React.useState(false)
    return (
        <div>
            <Modal
                size="tiny"
                closeIcon
                centered
                open={open}
                trigger={trigger}
                onOpen={() => setOpen(true)}
            >
                <Header icon={icon} content={header} />
                <Modal.Content className="text-dark">
                    {children}
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => setOpen(false)}>
                        <Icon name='remove' /> Kapat
                    </Button>
                    <Button color='green' onClick={click}>
                        <Icon name='checkmark' /> {buttonName}
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}
