import React from 'react'
import './Post.css'
import { GlobalStateContext } from '../../Context/ContextState'
import PostPopUp from '../PostPopUp/PostPopUp';

function Post({dataPost}) {

  const {ENDPOINT_CORS, showPopup, setShowPopup, setDataPopup} = GlobalStateContext();

  const mainData = dataPost.carousel_media[0]

  let mediaType
  let iconVideo = false

  if (mainData.type == "video"){
    mediaType = <img src={`${ENDPOINT_CORS}/${mainData.preview_video}`} className='media-post' crossOrigin="anonymous"/>
    iconVideo = true
  }
  else{
    mediaType = <img src={`${ENDPOINT_CORS}/${mainData.url}`} className='media-post' crossOrigin="anonymous"/>
  }

  return (
    <>
      {showPopup && <PostPopUp setShowPopup={setShowPopup}/>}
      <article className="post" onClick={() => {
        setDataPopup(dataPost)
        setShowPopup(true)
      }}>
        {mediaType}
        {iconVideo && <box-icon type='solid' name='video' color="white"></box-icon>}
      </article>
    </>
  )
}

export default Post