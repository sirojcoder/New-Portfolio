import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";
import Link from "next/link";

import {HiArrowRight} from 'react-icons/hi2'

const ProjectsBtn = () => {

  return (
    <div className="mx-auto flex flex-col md:flex-row items-center gap-7 xl:mx-0">
     <Link href={'/work'} className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
      <Image
        src={'/rounded-text.png'}
        width={141}
        height={148}
        alt=""
        className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
      />
      <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
    </Link>

    <div className="z-10">
      <div className="border rounded-[28px] border-gray-600 hover:border-accent px-5 py-2 hover:text-accent 
                       transition-all duration-300 
                      animate-zoom-slow">
        <a
          href="/Resume.pdf"
          download
          className="block flex items-center gap-2"
        >
          <button className="font-light">Resume</button>
          <MdOutlineFileDownload size={20} />
        </a>
      </div>
    </div>

    </div>
  )
};

export default ProjectsBtn;
