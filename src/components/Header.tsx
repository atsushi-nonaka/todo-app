import React from 'react'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <div>
            <NavLink to='/' activeClassName='is-active' exact>Dashboard</NavLink>
            <NavLink to='/registration' activeClassName='is-active'>Registration</NavLink>
        </div>
    )
}

export default Header