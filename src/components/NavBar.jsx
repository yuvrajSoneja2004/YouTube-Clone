import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SiteLogo from '../assets/logo.png'
import { useGlobalContext } from '../contexts/globalContext';
import { useAuth0 } from '@auth0/auth0-react';
import { Dropdown } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im'


function Navbara() {


    let { themeState } = useGlobalContext();
    let { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();



    return (
        <WholeNav collapseOnSelect expand="lg" style={themeState}>
            <Container>
                <Navbar.Brand href="#home" style={themeState}  >
                    <Logo>
                        <img src={SiteLogo} alt="siteLogo" width={40} />

                        <LogoLink to='/'><h2>Your<span>Tube</span></h2></LogoLink>
                    </Logo>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='custom-nav-toggle' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <SearchLink to='/search'>
                            <SearchIcon />
                        </SearchLink>

                        {
                            isAuthenticated === false ? <Nav.Link onClick={() => {
                                loginWithRedirect();
                            }}>
                                <SignUpBtn>Sign up</SignUpBtn>
                            </Nav.Link> : <Dropdown className="d-inline mx-2" autoClose="outside">
                                <Dropdown.Toggle id="dropdown-menu-align-end"
                                    align="end">
                                    <UserProfile src={user.picture} alt={user.nickname} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#"><strong>{user.name}</strong></Dropdown.Item>
                                    <Dropdown.Item href="#">Nickname: {user.nickname}</Dropdown.Item> <Dropdown.Item href="#">Email: {user.email}</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        logout({
                                            logoutParams: {
                                                returnTo: window.location.origin
                                            }
                                        })
                                    }}><i>Log out</i></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </WholeNav>
    );
}

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const LogoLink = styled(Link)`
text-decoration: none;
color: #000;
text-shadow: 0px 1px, 1px 0px, 1px 0px;

margin-left: 10px;
font-weight: bolder;



h2 {
    margin-bottom: 0 !important;
}
span {
    color: #FF0000;
}
`

const SearchIcon = styled(ImSearch)`
    margin-top: 5px;
    font-size: 17px;
`
const SearchLink = styled(Link)`
    margin-top: 7px;
    font-size: 17px;
    margin-right: 20px;
    color: black;
`
const SignUpBtn = styled.button`
    border: none;
    outline: none;
    background-color: #FF0000;
    color: #fff;
    padding: 8px 20px;
    border-radius: 3px;
    transition: all .3s;

    &:hover {
        opacity: 0.8;
    }


`

const WholeNav = styled(Navbar)`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

`

const UserProfile = styled.img`
    
    width: 40px;
    border-radius: 50%;
`


export default Navbara;