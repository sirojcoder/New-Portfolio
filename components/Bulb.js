import Image from 'next/image'



const Bulb = () => {
  return(
    <div className='absolute -left-32 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[160px] md:w-[230px]'>
      <Image
       src={'/bulb.png'}
       width={260}
       height={200}
       alt=''
       className='w-full h-full'/>
    </div>
  )
};

export default Bulb;
