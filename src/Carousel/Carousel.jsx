import React from 'react'



import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './Carousel.css'

const slider = [
    {
        title: "NEW GAME IN DEVELOPMENT!",
        description: "A top down stealh game in vietnam",
        url: "https://i.imgur.com/PtbSNbo.png"
      },
      {
        title: "NEW WEB IS IN THE MAKING!",
        description: "The napicu dev team is making a new website",
        url: "https://i.imgur.com/OvG1PfQ.png"
      },
      {
        title: "NEW OST IN PRODUCTION!",
        description: "Miguel is making some really bussing ost dattebayo",
        url: "https://i.imgur.com/enWtI4r.png"
      },
      {
        title: "STANDING HERE I REALIZE",
        description: "THAT YOU WERE JUST LIKE ME TRYNIG TO MAKE HISTORY",
        url: "https://i.kym-cdn.com/photos/images/original/002/294/330/6d3.gif"
      },
      {
        title: "Baby Gril",
        description: "Are you a sandwich? bcs i would eat you up. - Anonymous",
        url: "https://i.imgur.com/NqrWyvT.jpg"
      },

      {
        title: "Hello",
        description: "Hitler",
        url: "https://i.imgur.com/7Mp0P6Y.jpg"
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

export default Carousel