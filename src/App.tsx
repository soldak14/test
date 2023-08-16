import { FC, useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { IApartament } from './types/types'
import { ROUTE } from './route'
import apartament_1 from './assets/images/apartament_1.jpg'
import apartament_2 from './assets/images/apartament_2.jpg'
import apartament_3 from './assets/images/apartament_3.jpg'
import apartament_4 from './assets/images/apartament_4.jpg'
import Header from './components/header/Header'
import HomePage from './pages/homepage/HomePage'
import UserPage from './pages/userPage/UserPage'
import ApartamentPage from './pages/apartamentPage/ApartamentPage'
import Layout from './components/layout/Layout'


const App: FC = () => {

  const [allApartaments, setAllApartaments] = useState<IApartament[]>([
    {
      id: '1',
      price: 2200,
      apartamentName: 'Del Sol',
      img: apartament_1,
      completed: false
    },
    {
      id: '2',
      price: 14400,
      apartamentName: 'Del Sol',
      img: apartament_2,
      completed: false
    },
    {
      id: '3',
      price: 14200,
      apartamentName: 'Del Sol',
      img: apartament_3,
      completed: false

    },
    {
      id: '4',
      price: 1220,
      apartamentName: 'Del Sol',
      img: apartament_4,
      completed: false

    },
    {
      id: '5',
      price: 1220,
      apartamentName: 'Del Sol',
      img: apartament_1,
      completed: false

    },
    {
      id: '6',
      price: 1200,
      apartamentName: 'Del Sol',
      img: apartament_2,
      completed: false

    },
    {
      id: '7',
      price: 3200,
      apartamentName: 'Del Sol',
      img: apartament_3,
      completed: false

    },
    {
      id: '8',
      price: 1200,
      apartamentName: 'Del Sol',
      img: apartament_4,
      completed: false

    },
  ])
  const [userItems, setUserItems] = useState<IApartament[]>([])

  const setCompleted = (id: string) => {
    const comlitedApartaments = allApartaments.map(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })
    localStorage.setItem('apartaments', JSON.stringify(comlitedApartaments))
  }


  const addItem = (itemId: string) => {
    const newItems = allApartaments.filter(item => item.id === itemId)
    setUserItems(prev => [...prev, ...newItems])
    setCompleted(itemId)
  }

  const deleteItem = (itemId: string) => {
    setCompleted(itemId)
    setUserItems(userItems.filter(item => item.id !== itemId))
  }

  useEffect(() => {
    const items = localStorage.getItem('useItems')
    if (items) {
      setUserItems(JSON.parse(items));
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('useItems', JSON.stringify(userItems))
  }, [userItems])

  useEffect(() => {
    const items = localStorage.getItem('apartaments')
    if (items) {
      setAllApartaments(JSON.parse(items));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('apartaments', JSON.stringify(allApartaments))
  }, [allApartaments])


  return (
    <Layout>
      <Header />
      <Routes>
        <Route path={ROUTE.HOME} element={<HomePage
          allApartaments={allApartaments}
          addItem={addItem}
          deleteItem={deleteItem} />}
        />
        <Route path={ROUTE.USER} element={<UserPage
          userItems={userItems}
          deleteItem={deleteItem}
          addItem={addItem} />}
        />
        <Route path={ROUTE.APARTAMENT} element={<ApartamentPage />} />
      </Routes>
    </Layout>
  )

}

export default App;
