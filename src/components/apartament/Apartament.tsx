import { FC } from 'react'
import { IApartament } from '../../types/types'
import { Link } from 'react-router-dom'
import styles from './apartament.module.scss'
import MyButton from '../../ui/myButton/MyButton'

type ApartamentPropsType = {
    apartament: IApartament
    addItem: (id: string) => void
    deleteItem: (id: string) => void
}

const Apartament: FC<ApartamentPropsType> = ({ apartament, addItem, deleteItem }) => {

    return (
        <div className={styles.apartament}>
            <Link to={`/apartament/${apartament.id}`}>
                <div className={styles.wrapper}>
                    <div>
                        <img src={process.env.PUBLIC_URL + apartament.img} alt="img" />
                    </div>
                    <div>
                        <h2 className={styles.title}>{apartament.apartamentName}</h2>
                    </div>
                    <div>
                        <p>$ {apartament.price}</p>
                    </div>
                </div>
            </Link>
            <div className={styles.button}>
                <div>
                    {
                        !apartament.completed
                            ? <MyButton onClick={() => addItem(apartament.id)}>Add</MyButton>
                            : <MyButton disabled={apartament.completed}>Added</MyButton>
                    }
                </div>
                <div>
                    {
                        apartament.completed &&
                        <MyButton onClick={() => deleteItem(apartament.id)}>Remove</MyButton>
                    }
                </div>
            </div>
        </div>
    )
}

export default Apartament