import { FC } from 'react'
import { IApartament } from '../../types/types'
import styles from '../../app.module.scss'
import Apartament from '../../components/apartament/Apartament'

type UserPagePropType = {
    userItems: IApartament[]
    deleteItem: (itemId: string) => void
    addItem: (id: string) => void


}

const UserPage: FC<UserPagePropType> = ({ userItems, deleteItem, addItem }) => {

    return (
        <>
            <div className={styles.title}>
                {userItems.length ? <h2>My choice</h2> : <p>Please choose apartments</p>}
            </div>
            <div className={styles.apartaments}>
                {userItems.map(apartament => (
                    <Apartament
                        key={apartament.id}
                        apartament={apartament}
                        addItem={addItem}
                        deleteItem={deleteItem}
                    />
                ))}
            </div>
        </>
    )
}

export default UserPage