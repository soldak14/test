import { FC } from 'react'
import styles from './myButton.module.scss'

type MyButtonPropType = {
    children: JSX.Element | React.ReactNode
    onClick?: () => void
    disabled?: boolean
}

const MyButton: FC<MyButtonPropType> = ({ children, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            className={styles.button}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default MyButton