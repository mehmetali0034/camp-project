import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Button primary onClick={signIn} >Giriş Yap</Button>
            <Button primary stayle={{marginLeft:'0.5'}} >Kayıt Ol</Button>
        </div>
    )
}

