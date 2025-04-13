 import React , {useState} from 'react'



// icons
import {
  FaHtml5,
  FaCss3,
  FaSass ,
  FaJs,
  FaReact,
  FaGitAlt ,
  FaNodeJs 
} from "react-icons/fa";


import {
  SiNextdotjs,
  SiAntdesign,
  SiRedux ,
  SiTailwindcss ,
  SiPostman ,
  SiTypescript,
  
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: '',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaSass />,
          <SiTailwindcss />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaNodeJs />,
          <SiAntdesign />,
          <SiRedux />,
          <SiTypescript />,
          <FaGitAlt />,
          <SiPostman />
        ],
      },
      {
       
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'Japan Digital University (JDU)',
        stage: '2021 - 2026',
      },
      {
        title: 'Najot Talim',
        stage: '2024 - 2025',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Web (During the course) - Online shop',
        stage: '2024 - 2024',
      },
      {
        title: 'Web (During the course) - Kafe Menu ',
        stage: '2024 - 2024',
      },
      {
        title: 'Web (During the course) - e-commerce site',
        stage: '2025 - 2025',
      },
      {
        title: 'Web (During the course) - Medium clone',
        stage: '2025 - 2025',
      },
    ],
  },
  {
    title: 'About me',
    info: [
      {
        title: ' Siroj Radjabboev',
        stage: ' 26',
        name: 'FIO',
        max: 'Age'
      },
      {
        title: '  Tashkent',
        stage: ' Junior',
        name: ' City',
        max: 'Experience'
      },
      {
        title: '  Frontend Developer',
        stage: '  Uzbek',
        name: 'Status',
        max: 'Nationality'
      },
     
      {
        title: '   sirojcoder@gmail.com',
        stage: '   +998(93) 619 70 40',
        name: 'Email ',
        max: 'Phone'
      },
      {
        title: '  Uzbek, Turkish, Japones',
        name: 'Languages', 
      },
      {
        
      }
    ],
  },
];

import { motion} from 'framer-motion'
import { fadeIn} from '../../variants'
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import CountUp  from 'react-countup';
import Image from 'next/image';

const About = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div 
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='hidden xl:flex absolute bottom-0 -left-[370px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
           {/*  text */}
        <div className='flex-1 xl:mt-[70px] flex flex-col justify-center'>
           <motion.h2
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
           className='h2'> Frontend <span className='text-accent'>Developer </span> creating fast responsive websites
           </motion.h2>
           <motion.p
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
           className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'> I am a responsible developer who is always striving for continuous learning and growth. I constantly explore new technologies and work on improving my skills.</motion.p>
           <motion.div
              className='hidden xl:block absolute -left-[185px] bottom-0 w-[350px] h-[450px]'
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: [0, 7, 0], 
              }}
              transition={{
                opacity: { duration: 0.9 },
                x: {
                  duration: 9,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <Avatar />
            </motion.div>


           {/* countres */}
           <motion.div
            variants={fadeIn('right', 0.8)}
            initial='hidden'
            animate='show'
            exit='hidden'
           className=' md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
             <div className='flex gap-x-6 flex-1 xl:gap-x-6'>
              {/* experiens */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-2xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={8} duration={6}/> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Months of experience
                  </div>
              </div>
               {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-2xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={11} duration={6}/>+
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    finished project
                  </div>
              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-2xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={10} duration={6}/> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Programming Languages
                  </div>
              </div>  
             </div>
           </motion.div>
        </div>
            {/* info */}
            
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
        className='flex flex-col pl-5  w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8  mx-auto lg:mt-[45px] xl:mx-8 mb-4'>
            {aboutData.map((item, itemIndex) => {
             return(
            <div key={itemIndex} className={` ${index === itemIndex ? 'text-accent after:w-[100%]  after:!bg-accent after:transition-all after:duration-300' :"after:bg-white"} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0 `}
            onClick={()=> setIndex(itemIndex)}
            >
               {item.title}
            </div>
          )
          })}
        </div>
        <div className=' py-2 xl:py-11 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            
            return(
              <div key={itemIndex}>
                <div className='font-light flex gap-4 items-center mb-1 md:mb-0'>
                 
                  <div className='text-accent text-md'>{item.name}</div>
                 <div className='text-lg'> {item.title}</div>
                </div>
                 {/* <div className='hidden md:flex'>-</div> */}
                 <div className='font-light flex gap-4 items-center mb-1 md:mb-0'>
                   <div className='text-accent text-md'>{item.max}</div>
                   <div className='text-lg '>{item.stage}</div>
                 </div>
                                {item.icons && (
                  <div className='grid grid-cols-4 md:grid-cols-5 mx-auto  gap-11'>
                    {item.icons.map((icon, i) => (
                      <div key={i} className='hover:text-accent text-5xl md:text-4xl  text-white'>
                        {icon}
                      </div>
                    ))}
                  </div>
                )}
                 
              </div>
            )
          })}
        </div>
      </motion.div>
      </div>
      
  </div>
  )
 
};

export default About;
