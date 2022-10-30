import React from 'react'
import { useSelector } from 'react-redux'
import HeaderComponent from '../components/header/header'

export default function Header() {
    const userRole = useSelector(state => state.user.role)
    return (
        <HeaderComponent userRole={userRole} />
    )
}
