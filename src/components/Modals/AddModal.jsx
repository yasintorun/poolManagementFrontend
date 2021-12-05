import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default function AddModal({ header, icon, trigger, children, onClose }) {

    const [open, setOpen] = React.useState(false)

    const onClosed = () => {
        setOpen(false)
        if(onClose) {
            onClose()
        }
    }

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
                    <Button color='red' onClick={() => onClosed()}>
                        <Icon name='remove' /> Kapat
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}
