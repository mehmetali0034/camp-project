import React, { useState } from 'react'
import {Container, Dropdown, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)//setIsAuthenticated fonksiyonunu sadece navi içerisinde kullanabilirim.Çünkü burada yazdım props larla başka yerlere bağlayabilirim
    const navigate = useNavigate()
    function handleSignOut(param){
        setIsAuthenticated(false)
        navigate("/") //Bu şekilde çıkış yaptığımda hangi sayfada olursam olayım beni anasayfaya atacaktır.
    }
    function handleSignIn(param){
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Container>
                <Menu inverted fixed="top">
                    <Menu.Item as={NavLink} to="/"
                        name='Home'
                    />
                    <Menu.Item as={NavLink} to="/products/add"
                        name='Add Product'
                    />
                    <Menu.Menu position='right'>
                        <CartSummary />
                        {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn} /> }
                    </Menu.Menu>
                </Menu>
            </Container>
        </div>
    )
}
