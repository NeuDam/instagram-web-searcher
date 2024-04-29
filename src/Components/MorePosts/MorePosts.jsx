import React from 'react'
import { GlobalStateContext } from '../../Context/ContextState'
import './MorePosts.css'

function MorePosts() {

  const {showedPost, setShowedPost, dataUser} = GlobalStateContext()

  const handlerMorePosts = () => {
    if (showedPost + 12 >= dataUser.basicRating.posts || showedPost + 12 > 34){
      setShowedPost(dataUser.basicRating.posts)
    }
    else{
      setShowedPost(showedPost + 12)
    }
  }

  return (
    <button type="button" className='load-button' onClick={handlerMorePosts}>
      MORE POSTS
    </button>
  )
}

export default MorePosts