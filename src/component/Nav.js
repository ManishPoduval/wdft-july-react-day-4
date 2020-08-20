import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {

    let name = 'Jorge'

    return (
        <nav>
            <Link to="/"><p>Home</p></Link>
            <Link to={"/about"}><p>About</p></Link>
            <Link to={`/contacts/${name}`}><p>Contacts</p></Link>
        </nav>
    )
}
