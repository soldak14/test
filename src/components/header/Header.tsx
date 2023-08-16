import { FC } from 'react'
import { NavLink } from "react-router-dom"
import { ROUTE } from '../../route'
import styles from './header.module.scss'


const Header: FC = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.logo}>Apartaments</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink
                        to={ROUTE.HOME}
                        className={({ isActive }) => isActive ? styles.active : ""}
                    >
                        Home
                    </NavLink>

                </li>
                <li className={styles.item}>
                    <NavLink
                        to={ROUTE.USER}
                        className={({ isActive }) => isActive ? styles.active : ""}
                    >
                        User
                    </NavLink>

                </li>
            </ul>
        </header>
    )
}

export default Header