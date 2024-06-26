import { GlobalStateContext } from '../../Context/ContextState'
import './PostPopUp.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCards } from 'swiper/modules';

function PostPopUp({setShowPopup}) {

  const {ENDPOINT_CORS, dataPopup} = GlobalStateContext()

  const onClickClosePopup = () => {
    setShowPopup(false)
  }

  let firstMedia = dataPopup.carousel_media[0].dimensions

  return (
    <div className="container-popup">
      <div className="floater-post">
        <Swiper
          slidesPerView={1}
          pagination={{clickable: true}}
          effect='cards'
          grabCursor={true}
          centeredSlides={true}
          modules={[Pagination, EffectCards]}
          >
            {
              dataPopup.carousel_media.map((element) => {
              return (
                <SwiperSlide key={window.crypto.randomUUID}>
                  {(element.type == "image") ? 

                  <img src={`${ENDPOINT_CORS}/${element.url}`} alt={element.caption} title={element.caption} className={`media-floater ${firstMedia.height > firstMedia.width ? 'media-3-4' : 'media-1-1'}`} crossOrigin="anonymous"/> : 

                  <video key={window.crypto.randomUUID} src={`${ENDPOINT_CORS}/${element.url}`} autoPlay loop className={`media-floater ${firstMedia.height > firstMedia.width ? 'media-3-4' : 'media-1-1'}`} crossOrigin="anonymous"></video>} 

                  <a href={`${element.url}&dl=1`} rel="noreferrer noopener" target="_blank" className="downloader_media_button">
                    <box-icon type='solid' name='download'></box-icon>
                  </a>
                </SwiperSlide>)
            })}
        </Swiper>
        <section className="secondary_panel">      
          <p className="text_post">{dataPopup.text}</p>
          <span className="date_post">{dataPopup.date}</span>
          <article className="action_buttons">
              {/* <a href={dataPopup.link} target="_blank" rel="noopener noreferrer" className='redirect-link'>
            <button type="button" className='act_button_panel'>
                <box-icon name='right-top-arrow-circle' type='solid' ></box-icon>
            </button>
              </a> */}
            <button type="button" className='act_button_panel' onClick={onClickClosePopup}>
              <box-icon type='solid' name='x-circle'></box-icon>
            </button>
          </article>
        </section>
      </div>
    </div>
  )
}

export default PostPopUp