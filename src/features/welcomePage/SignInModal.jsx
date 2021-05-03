import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import SignInScreen from '../signin/SignInScreen'

export default function SignInModal() {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            closeIcon
            open={open}
            trigger={<Button className="button" color="olive" content='Sign in' icon='sign in' size='big' />
            }
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <SignInScreen />
            {/* <Header icon='archive' content='Archive Old Messages' />
            <Modal.Content>
                <p>
                    Your inbox is getting full, would you like us to enable automatic
                    archiving of old messages?
        </p>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
        </Button>
                <Button color='green' onClick={() => setOpen(false)}>
                    <Icon name='checkmark' /> Yes
        </Button>
            </Modal.Actions> */}
        </Modal>
    )
}

