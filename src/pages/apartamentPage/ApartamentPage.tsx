import { FC, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IApartament } from '../../types/types'
import { ROUTE } from '../../route'
import styles from './apartamentPage.module.scss'


const ApartamentPage: FC = () => {

    const [apartaments, setApartaments] = useState<IApartament[]>([])

    useEffect(() => {
        const items = localStorage.getItem('apartaments')
        if (items) {
            setApartaments(JSON.parse(items));
        }
    }, [])
    const params = useParams()

    const thisProduct = apartaments.find(apartament => apartament.id === params.id)

    return (
        <>
            <Link className={styles.link} to={ROUTE.HOME}>Back Home</Link>
            <div className={styles.item}>
                <div className={styles.imgWrapper}>
                    <img src={thisProduct?.img} alt="img" />
                </div>
                <div>
                    <h2>
                        {thisProduct?.apartamentName}
                    </h2>
                </div>

            </div>
        </>

    )
}

export default ApartamentPage