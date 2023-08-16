import { FC, useState, useEffect } from 'react'
import { IApartament } from '../../types/types'
import Apartament from '../../components/apartament/Apartament'
import styles from '../../app.module.scss'


type HomePagePropType = {
    allApartaments: IApartament[]
    addItem: (id: string) => void
    deleteItem: (id: string) => void
}

const HomePage: FC<HomePagePropType> = ({ allApartaments, addItem, deleteItem }) => {

    const [query, setQuery] = useState('')

    useEffect(() => {
        const items = localStorage.getItem('query')
        if (items) {
            setQuery(JSON.parse(items));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('query', JSON.stringify(query))
    }, [query])


    return (
        <>
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                value={query}
                placeholder='Search by price...'
                className={styles.inputSearch}
            />
            <div className={styles.apartaments}>
                {query.length ?
                    <>
                        {allApartaments.filter(item => item.price.toString().includes(query))
                            .map(apartament => (
                                <Apartament
                                    key={apartament.id}
                                    apartament={apartament}
                                    addItem={addItem}
                                    deleteItem={deleteItem}

                                />
                            ))}
                    </>
                    : <>
                        {allApartaments.map(apartament => (
                            <Apartament
                                key={apartament.id}
                                apartament={apartament}
                                addItem={addItem}
                                deleteItem={deleteItem}

                            />
                        ))}
                    </>}
            </div>
        </>
    )
}

export default HomePage