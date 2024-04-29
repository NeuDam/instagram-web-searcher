import { useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import InformationProfile from './Components/InformationProfile/InformationProfile'
import { GlobalStateContext } from './Context/ContextState'
import Loader from './Components/Loader/Loader'

function App() {

  const { fetchUser, dataUser, loader } = GlobalStateContext()

  useEffect(() => {

    fetchUser('ana_d_armas')

  },[])

  return (
    <>
      <Header/>
      {loader && <Loader/>}
      {dataUser && <InformationProfile/>}
    </>
  )
}

export default App
