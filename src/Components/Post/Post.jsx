import React from 'react'
import './Post.css'
import { GlobalStateContext } from '../../Context/ContextState'

function Post({dataPost}) {

  const {ENDPOINT_CORS} = GlobalStateContext();

  const mainData = dataPost.carousel_media[0]

  let mediaType

  if (mainData.type == "video"){
    mediaType = <img src={`${ENDPOINT_CORS}/${mainData.preview_video}`} className='media-post' crossOrigin="anonymous"/>
  }
  else{
    mediaType = <img src={`${ENDPOINT_CORS}/${mainData.url}`} className='media-post' crossOrigin="anonymous"/>
  }

  return (
    <article className="post">
      {mediaType}
    </article>
  )
}

export default Post