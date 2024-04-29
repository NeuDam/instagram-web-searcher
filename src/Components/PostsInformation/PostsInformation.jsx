import React from 'react'
import { GlobalStateContext } from '../../Context/ContextState'
import Post from '../Post/Post';
import './PostsInformation.css'
import MorePosts from '../MorePosts/MorePosts';

function PostsInformation() {

  const {dataUser, showedPost} = GlobalStateContext();
  const postsData = dataUser.posts

  if (dataUser.private == true){
    return (
      <section className="profile_information_posts private-section">
        <p className="warning-message">PRIVATE PROFILE</p>
        <img src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-png-14.png" alt="Private Profile Symbol" className="lock-image" />
      </section>
    )
  }

  if (dataUser.basicRating.posts == 0){
    return (
      <section className="profile_information_posts">
        <p className="warning-message">No Posts</p>
      </section>
    )
  }

  const limitedPosts = postsData.slice(0, showedPost);

  return (
    <section className="profile_information_posts">
      {
        limitedPosts.map((element) => {
          return <Post dataPost={element} key={element.id}/>
        })
      }
      {showedPost != dataUser.basicRating.posts ? <MorePosts/>:''}
    </section>
  )
}

export default PostsInformation