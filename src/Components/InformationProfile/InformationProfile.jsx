import React from 'react'
import { GlobalStateContext } from '../../Context/ContextState'
import './InformationProfile.css'
import PostsInformation from '../PostsInformation/PostsInformation';

function InformationProfile() {

  const {dataUser, ENDPOINT_CORS} = GlobalStateContext();

  if (dataUser.error){
    return (
      <main>
        <p className="warning-message">USER NOT FOUND</p>
      </main>
    )
  }

  return (
    <main>
      <section className="profile_information_main">
        <section className="main-1">
            <article className="top-section-1">
              
              <img 
                src={ENDPOINT_CORS + '/' + dataUser.profile_pic} 
                alt={`${dataUser.username}'s profile picture - ${dataUser.user_id}`} 
                className="profile_picture"
                crossOrigin="anonymous"
              />
              <button type='button' className='download-pic-button'>
                <a href={`${dataUser.profile_pic}&dl=1`} target="_blank" rel="noreferrer noopener" >
                  Download Image
                </a>
              </button>
            </article>
            <article className="top-section-2">
              <h2 className="name_profile">{dataUser.name}</h2>
              <span className="bio_text">{dataUser.bio}</span>
            </article>
        </section>
        <section className="main-2">
          <span className="basic-info-data">Following <br /> {dataUser.basicRating.following}</span>
          <span className="basic-info-data">Followers <br /> {dataUser.basicRating.followers}</span>
          <span className="basic-info-data">Posts <br /> {dataUser.basicRating.posts}</span>
        </section>
      </section>
      <PostsInformation/>
    </main>
  )
}

export default InformationProfile