import { FC } from 'react'
import styles from '../../app.module.scss'

type LayoutPropType = {
    children: JSX.Element | React.ReactNode
}

const Layout: FC<LayoutPropType> = ({ children }) => {
    return (
        <div className={styles.app}>
            <div className={styles.appContainer}>
                {children}
            </div>
        </div>
    )
}

export default Layout