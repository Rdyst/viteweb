import React from 'react'



import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './Carousel2.css'

const slider = [
    {
        title: "NEW GAME IN DEVELOPMENT!",
        description: "A top down stealh game in vietnam",
        url: "https://i.imgur.com/PtbSNbo.png"
      },
      {
        title: "Coming soon",
        description: "More games are underway were share them when theyre ready",
        url: "https://i.imgur.com/PtbSNbo.png"
      }
     

]

const Carousel = () => {
  return (
    <div className='carousel'>
        <div>
            <div className='carousel-content'>

            </div>
        </div>

        <Swiper 
        className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
        }}
        loop={true}
        pagination={{clickable: true}}

        autoplay={{
            delay: 10000,
            disableOnInteraction: false
        }}
        breakpoints={{
            640: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 1
            },
            1560: {
                slidesPerView: 1
            },
            1920: {
                slidesPerView: 1
            }
        }}
        
        >
            {
                slider.map(data => (
                    <SwiperSlide style={{ backgroundImage: `url(${data.url})` }} className="myswiper-slider">
                        <div>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>


    </div>
  )
}

export default Carousel2