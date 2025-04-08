import Link from "next/link";
import {RiInstagramLine,  RiFacebookLine, RiLinkedinLine, RiTelegramLine, RiGithubLine} from 'react-icons/ri'


const Socials = () => {
  return(
    <div className="flex items-center gap-x-5 text-xl">
      <Link href={'https://facebook.com/s_radjabboyev'} target="blank" className="hover:text-accent transition-all duration-300">
       <RiFacebookLine />
      </Link>
      <Link href={'https://instagram.com/s_radjabboyev'}  target="blank" className="hover:text-accent transition-all duration-300">
       <RiInstagramLine />
      </Link>
      <Link href={'https://t.me/S_Radjabboev'} target="blank" className="hover:text-accent  transition-all duration-300">
       <RiTelegramLine />
      </Link>
      <Link href={'https://linkedin.com/in/siroj-radjabboyev-987794356'} target="blank" className="hover:text-accent transition-all duration-300">
       <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/sirojcoder'} target="blank" className="hover:text-accent transition-all duration-300">
       <RiGithubLine />
      </Link>
    </div>
  )
};

export default Socials;
