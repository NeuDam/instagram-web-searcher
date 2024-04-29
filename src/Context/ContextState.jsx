import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export const GlobalStateContext = () => {
  return useContext(Context)
}

export function ContextStateProvider({children}) {


  const [dataUser, setDataUser] = useState()
  const [showedPost, setShowedPost] = useState(12)
  const [loader, setLoader] = useState(false)
  const ENDPOINT_CORS = 'https://lui2mi-corsanywhere.fly.dev'

  const fetchUser = async (username) => {
    username = username.toLowerCase()

    if (username != 'ana_d_armas'){
      setLoader(true)
    }

    const response = await fetch(`https://instagram-backend-dox.vercel.app/user/${username}`).catch((e) => {console.log('Error: ' + e)})

    const data = await response.json()

    setShowedPost(12)
    setLoader(false)

    if (response.status != 200){
      setDataUser({error: true, details:'User Not Found'})
      return
    }

    setDataUser(data)
  }

  return (
    <Context.Provider value={{
        dataUser,
        fetchUser,
        ENDPOINT_CORS,
        showedPost,
        setShowedPost,
        loader
    }}>
        {children}
    </Context.Provider>
  )
}