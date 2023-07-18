import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'
export default function Signedin(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://st2.depositphotos.com/2146559/10705/i/950/depositphotos_107050744-stock-photo-woman-hiker-enjoying-mountain-view.jpg" ></Image>
                <Dropdown  pointing="top left" text='Ali Kolcuk' >
                    <Dropdown.Menu>
                        <Dropdown.Item text="Hesabım" icon="user" ></Dropdown.Item>
                        <Dropdown.Item text="Çıkış Yap" icon="log out" onClick={props.signOut} ></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
