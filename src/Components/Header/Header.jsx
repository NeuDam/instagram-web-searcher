import React, { useState } from 'react'
import './Header.css'
import { GlobalStateContext } from '../../Context/ContextState'

function Header() {

  const { fetchUser } = GlobalStateContext()

  const [tempUsername, setTempUsername] = useState()

  const onFetchUserIg = () => {
    fetchUser(tempUsername)
    setTempUsername('')
  }

  return (
    <header className="header">
      <div className="container_searcher">
        <input 
          type="text" 
          className="username_input" 
          value={tempUsername} 
          placeholder="Kyliejenner" 
          onChange={(e) => {
          setTempUsername(e.target.value)
          }} 
        />
        <button type="submit" className='submit_button_username' onClick={onFetchUserIg}>
          <box-icon name='search-alt'></box-icon>
        </button>
      </div>
    </header>
  )
}

export default Header