import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

import t1 from './../../public/thumb1.jpg';
import t2 from './../../public/thumb2.jpg';
import t3 from './../../public/thumb3.jpg';
import t4 from './../../public/thumb4.jpg';
import t5 from '../../public/tr5.jpg';
import t6 from '../../public/t6.jpg';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

const Work = () => {
  const images = [t1, t2, t3, t4, t5, t6];

  const projectLinks = [
    'https://online-shop-rose.vercel.app',
    'https://homework-7-dars-five.vercel.app/',
    'https://instagramga-oxshash-sayt-tayyori.vercel.app',
    'https://mobile-store-flame.vercel.app/',
    'https://medium-phi-plum.vercel.app',
    'https://portfolio-three-virid-58.vercel.app'
  ];

  const githubLinks = [
    'https://github.com/sirojcoder/Online-shop',
    'https://github.com/sirojcoder/homework-7-dars',
    'https://github.com/sirojcoder/exam-5-oy',
    'https://https://github.com/sirojcoder/Mobile-store',
    'https://github.com/sirojcoder/Medium',
    'https://github.com/sirojcoder/Portfolio'
  ];

  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text */}
          <motion.div 
            variants={fadeIn('down', 0.3)}
                       initial='hidden'
                       animate='show'
                       exit='hidden'
           className="text-center flex xl:w-[30vw] mb-[70px] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              My Work <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
            Here you can see some of the work I&apos;ve done. They were made using <span className='text-accent'>Html, Css, Sass, Tailwind, JavaScript, React, Next.Js</span> programming languages. If you want, you can see them in their full Live Project and of course  see the GitHub codes.
            </p>
          </motion.div>

          {/* Swiper slider */}
          <motion.div 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
           className="w-full xl:max-w-[50%]">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              slidesPerGroup={1}
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative group w-full h-[290px] overflow-hidden rounded-xl">
                    <Image
                      src={img}
                      alt={`project ${i + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute  inset-0 bg-gradient-to-tr from-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-90 transition-all duration-300 flex  items-center justify-center gap-4">
                      <a
                        href={projectLinks[i]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-accent px-7 py-3 rounded-2xl text-2xl font-semibold hover:bg-gray-200 transition"
                      >
                        {/* Live Project */}
                        <FaRegPlayCircle />
                      </a>
                      <a
                        href={githubLinks[i]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-accent px-7 py-3 rounded-2xl text-2xl font-semibold hover:bg-gray-200 transition"
                      >
                        {/* GitHub Code*/} 
                        <FaGithub /> 
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            
          </motion.div>
          <Bulb />
            <Circles />
        </div>
      </div>
    </div>
  );
};

export default Work;
