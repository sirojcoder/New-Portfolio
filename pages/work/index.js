import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import t1 from './../../public/thumb1.jpg';
import t2 from './../../public/thumb2.jpg';
import t3 from './../../public/thumb3.jpg';
import t4 from './../../public/thumb4.jpg';

const Work = () => {
  const images = [t1, t2, t3, t4];
  const projectLinks = [
    '/project1', // Add your project links here
    '/project2',
    '/project3',
    '/project4'
  ];

  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              My Work <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Wikipedia is hosted by the Wikimedia Foundation, a non-profit organization that also hosts a range of other projects. You can support our work.
            </p>
          </div>

          {/* Swiper slider with 4 images and pagination */}
          <div className="w-full xl:max-w-[65%]">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={2}
              slidesPerGroup={2}
              breakpoints={{
                0: { slidesPerView: 1, slidesPerGroup: 1 },
                640: { slidesPerView: 2, slidesPerGroup: 2 },
                1024: { slidesPerView: 2, slidesPerGroup: 2 }, // 4 ta rasm uchun
              }}
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative group w-full h-[200px] overflow-hidden rounded-xl">
                    <Image
                      src={img}
                      alt={`project ${i + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay with link */}
                    <a
                       href="https://t.me/S_Radjabboev" // Add the specific project link
                      className="absolute inset-0 bg-gradient-to-tr from-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-end justify-center"
                    >
                      <span className="text-white text-lg font-semibold mb-4 transform translate-y-6 group-hover:translate-y-0 transition-all duration-300">
                        Live Project
                      </span>
                    </a>
                  <div className="swiper-pagination absolute  mt-7 left-0 w-full flex justify-center "></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Pagination (Positioned lower) */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
