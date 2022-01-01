import React from 'react'
import { Container, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap'

export const Header = () => {
    return (
        <Navbar expand='lg' variant='light' bg='light'>
            <Container>
                <Navbar.Brand href='#'><h4>Expense Tracker</h4></Navbar.Brand>
                <Navbar.Text className="justify-content-end">
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip>Visit GitHub Profile</Tooltip>}>
                        <a href='https://github.com/agentrajat' className='repo-icon'><i className='fab fa-github' /></a>
                    </OverlayTrigger>
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}
