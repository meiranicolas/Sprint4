import React from 'react'
import './style.css'

type LinkProps = {
    link: string
    nome: string
}

const NavItem = ({link, nome}: LinkProps) => {
    return (
        <li className='nav-item'>
            <a href={link}>{nome}</a>
        </li>
    )
}

export default NavItem